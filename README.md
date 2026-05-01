# 🎓 Sistem Pelacakan Alumni UMM

Sistem pelacakan data alumni **Universitas Muhammadiyah Malang** berbasis web statis (HTML, CSS, JavaScript murni). 
---

### Link Vercel
https://alumni-tracker-virid.vercel.app/?authuser=0

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

---

## ✨ Fitur

### Portal Alumni
- Login dengan NIM + Program Studi
- Isi / edit data pribadi:
  - Email & No. HP
  - Media sosial
  - Tempat kerja, alamat kerja, posisi
  - Status (PNS / Swasta / Wirausaha)
- Data langsung tersimpan dan terlihat di dashboard admin

### Dashboard Admin
- Statistik: total alumni, sudah isi, belum isi, % kelengkapan
- Tabel alumni lengkap dengan filter & pencarian
- Filter berdasarkan status data & fakultas
- Tambah mahasiswa baru (nama, NIM, tahun masuk, tanggal lulus, fakultas, prodi)
- Lihat detail profil setiap alumni
- Admin **tidak bisa** mengubah data profil alumni

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
