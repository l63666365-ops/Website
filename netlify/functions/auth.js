const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

exports.handler = async (event) => {
  const { code } = event.queryStringParameters || {};

  if (!code) {
    return {
      statusCode: 302,
      headers: {
        Location: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user`
      }
    };
  }

  try {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code })
    });
    const data = await res.json();
    const token = data.access_token;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `<!DOCTYPE html><html><body><script>
        const msg = "authorization:github:success:" + JSON.stringify({token:"${token}",provider:"github"});
        window.opener && window.opener.postMessage(msg, "*");
        window.close();
      </script><p>Login berhasil! Tutup tab ini.</p></body></html>`
    };
  } catch(e) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `<script>window.opener&&window.opener.postMessage("authorization:github:error:${e.message}","*");window.close();</script>`
    };
  }
};
