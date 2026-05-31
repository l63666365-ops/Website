const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const code = params.code;
  const host = `https://${event.headers.host}`;

  // Step 1: redirect ke GitHub untuk minta izin
  if (!code) {
    const callbackUrl = `${host}/.netlify/functions/auth`;
    const ghUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user&redirect_uri=${encodeURIComponent(callbackUrl)}`;
    return { statusCode: 302, headers: { Location: ghUrl }, body: '' };
  }

  // Step 2: tukar code jadi token
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code
      })
    });

    const data = await response.json();

    if (data.error || !data.access_token) {
      throw new Error(data.error_description || 'Token tidak didapat');
    }

    const token = data.access_token;
    const msg = `authorization:github:success:${JSON.stringify({ token, provider: 'github' })}`;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body>
<p>Login berhasil! Tab ini akan tertutup otomatis...</p>
<script>
  (function() {
    var msg = ${JSON.stringify(msg)};
    function send() {
      if (window.opener) {
        window.opener.postMessage(msg, '*');
        setTimeout(function(){ window.close(); }, 500);
      } else {
        setTimeout(send, 200);
      }
    }
    send();
  })();
</script>
</body></html>`
    };

  } catch (err) {
    const errMsg = `authorization:github:error:${err.message}`;
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: `<!DOCTYPE html>
<html><body>
<p>Login gagal: ${err.message}</p>
<script>
  if (window.opener) {
    window.opener.postMessage(${JSON.stringify(errMsg)}, '*');
  }
  setTimeout(function(){ window.close(); }, 2000);
</script>
</body></html>`
    };
  }
};
