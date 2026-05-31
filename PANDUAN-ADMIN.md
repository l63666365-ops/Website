# 📋 Panduan Update Konten Website SMKN 2 Sragen

> Panduan untuk admin/guru yang ingin update konten website tanpa coding.
> Cukup butuh HP/laptop dan akun GitHub.

---

## 🔗 Link Penting
- **Website:** https://l63666365-ops.github.io/Website
- **Kelola Konten:** https://github.com/l63666365-ops/Website/tree/main/_data

---

## ✅ Cara Tambah Konten Baru

### 1. Buka folder konten di GitHub
| Konten | Link Folder |
|--------|-------------|
| 📰 Berita | https://github.com/l63666365-ops/Website/tree/main/_data/berita |
| 🏆 Prestasi | https://github.com/l63666365-ops/Website/tree/main/_data/prestasi |
| 📸 Galeri | https://github.com/l63666365-ops/Website/tree/main/_data/galeri |
| 💬 Testimoni | https://github.com/l63666365-ops/Website/tree/main/_data/testimoni |
| 📢 Pengumuman | https://github.com/l63666365-ops/Website/tree/main/_data/pengumuman |
| 📅 Agenda | https://github.com/l63666365-ops/Website/tree/main/_data/agenda |

### 2. Klik "Add file" → "Create new file"
### 3. Isi nama file: `2026-06-15-judul-singkat.json`
### 4. Copy-paste template di bawah, edit isinya
### 5. Klik "Commit changes" → "Commit directly to main" → "Commit changes"
### 6. Website update otomatis ~1 menit ✅

---

## 📝 Template

### 📰 BERITA
```json
{
  "judul": "Judul berita",
  "tanggal": "15 Juni 2026",
  "kategori": "Prestasi",
  "foto": "",
  "emoji": "🏆",
  "ringkasan": "Ringkasan 2-3 kalimat.",
  "isi": "",
  "utama": false
}
```

### 🏆 PRESTASI
```json
{
  "judul": "Juara 1 LKS Teknik Pemesinan",
  "tingkat": "Tingkat Provinsi",
  "medali": "🥇",
  "deskripsi": "Lomba Kompetensi Siswa — Jawa Tengah",
  "tahun": "2026"
}
```

### 📸 GALERI
```json
{
  "judul": "Nama kegiatan",
  "foto": "https://link-foto.jpg",
  "emoji": "📸",
  "ukuran": "normal"
}
```

### 💬 TESTIMONI
```json
{
  "nama": "Nama Siswa",
  "peran": "Ketua OSIS",
  "kutipan": "Isi testimoni.",
  "ikon": "fa-user-graduate"
}
```

### 📢 PENGUMUMAN
```json
{
  "judul": "Judul pengumuman",
  "tanggal": "15 Juni 2026",
  "kategori": "Akademik",
  "dot": "new",
  "utama": false
}
```

### 📅 AGENDA
```json
{
  "judul": "Nama kegiatan",
  "tanggal": "15 Juni 2026",
  "hari": "15",
  "bulan": "Jun",
  "jenis": "kegiatan",
  "waktu": "08.00 – 16.00 WIB",
  "lokasi": "Aula Sekolah"
}
```
