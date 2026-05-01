# 🎓 Sistem Pelacakan Alumni UMM

Sistem pelacakan data alumni **Universitas Muhammadiyah Malang** berbasis web statis (HTML, CSS, JavaScript murni). Tidak memerlukan backend atau server — bisa langsung dihosting di GitHub Pages, Vercel, atau Netlify.

---

## 📁 Struktur Folder

```
alumni-tracker/
├── index.html               # Login Alumni (halaman utama)
├── css/
│   └── style.css            # Semua styling
├── js/
│   └── data.js              # Data alumni + fungsi database (localStorage)
└── pages/
    ├── admin-login.html     # Login Administrator
    ├── admin-dashboard.html # Dashboard & manajemen alumni (admin)
    └── alumni-dashboard.html # Profil & edit data (alumni)
```

---

## 🔐 Akun Login

### Admin
| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | `admin123` |

### Alumni
Login menggunakan **NIM** + **Program Studi** yang sudah terdaftar.

Contoh akun alumni yang sudah ada data:
| NIM | Program Studi |
|-----|---------------|
| `95620625` | Akuntansi |
| `95620626` | Akuntansi |
| `93102035` | Magister - Sosiologi Pedesaan |

---

## ✨ Fitur

### Portal Alumni
- Login dengan NIM + Program Studi
- Isi / edit data pribadi:
  - Email & No. HP
  - Media sosial (LinkedIn, Instagram, Facebook, TikTok)
  - Tempat kerja, alamat kerja, posisi
  - Status (PNS / Swasta / Wirausaha)
  - Sosial media tempat kerja
- Data langsung tersimpan dan terlihat di dashboard admin

### Dashboard Admin
- Statistik: total alumni, sudah isi, belum isi, % kelengkapan
- Tabel alumni lengkap dengan filter & pencarian
- Filter berdasarkan status data & fakultas
- Tambah mahasiswa baru (nama, NIM, tahun masuk, tanggal lulus, fakultas, prodi)
- Lihat detail profil setiap alumni
- Admin **tidak bisa** mengubah data profil alumni

---

## 🚀 Cara Menjalankan

### Lokal (VS Code)
1. Clone repo ini
2. Buka folder dengan VS Code
3. Install ekstensi **Live Server**
4. Klik kanan `index.html` → **Open with Live Server**

### Deploy ke Vercel / Netlify
1. Push ke GitHub
2. Connect repo ke Vercel atau Netlify
3. Deploy langsung (tidak perlu build command)

### GitHub Pages
1. Push ke GitHub
2. Buka Settings → Pages → Source: `main` branch, folder `/` (root)
3. Akses di `https://username.github.io/nama-repo`

---

## 💾 Penyimpanan Data

Sistem menggunakan `localStorage` browser sebagai database sementara. Data tersimpan di browser masing-masing pengguna.

> **Catatan**: Untuk produksi dengan banyak pengguna, disarankan mengintegrasikan dengan backend (Firebase, Supabase, dll).

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (Vanilla, tanpa framework)
- Google Fonts (Plus Jakarta Sans + Space Mono)
- localStorage untuk persistensi data

---

&copy; 2026 Alumni Universitas Muhammadiyah Malang
