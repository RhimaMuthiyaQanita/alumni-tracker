# 🎓 Alumni Tracker — Sistem Pelacakan Alumni UMM

Website untuk menampilkan, mencari, dan memverifikasi data alumni Universitas Muhammadiyah Malang (UMM) menggunakan data dari Google Sheets dan verifikasi ke PDDikti Kemdiktisaintek.

---

## 🚀 Fitur

- 🔐 **Login** — autentikasi sederhana untuk mengamankan akses
- 📊 **Dashboard** — statistik total alumni, terverifikasi, belum dicek, tidak ditemukan
- 👥 **Data Alumni** — tampilan tabel data alumni dari Google Sheets + fitur pencarian
- ✅ **Verifikasi PDDikti** — verifikasi setiap alumni ke database resmi PDDikti Kemdiktisaintek
- ➕ **Tambah Alumni** — form untuk menambahkan data alumni baru

---

## 🔐 Akun Login

| Username | Password |
|----------|----------|
| admin    | 123      |

---

## 🌐 Demo Website

🔗 [https://alumni-tracker-virid.vercel.app/](https://alumni-tracker-virid.vercel.app/)

---

## 🛠️ Teknologi

- HTML5, CSS3, JavaScript (Vanilla)
- Google Sheets (sebagai sumber data)
- [OpenSheet API](https://opensheet.elk.sh/) — konversi Google Sheets ke JSON
- [PDDikti Kemdiktisaintek](https://pddikti.kemdiktisaintek.go.id/) — verifikasi data alumni

---

## 📊 Sumber Data

Data alumni diambil dari Google Sheets melalui OpenSheet API:  
`https://opensheet.elk.sh/19Q5RlqlZ2Wi1Y18gUcElKHvQak5JVNmykU5KIvrzdGM/1`

---

## ✅ Pengujian Sistem

Pengujian dilakukan berdasarkan aspek kualitas sistem (fungsionalitas, keandalan, kegunaan, dan efisiensi).

### Tabel Pengujian Fungsional

| No | Fitur yang Diuji | Skenario Uji | Input | Expected Output | Actual Output | Status |
|----|-----------------|--------------|-------|-----------------|---------------|--------|
| 1 | Login | Login dengan kredensial benar | username: `admin`, password: `123` | Masuk ke halaman utama | Berhasil masuk ke dashboard | ✅ Pass |
| 2 | Login | Login dengan kredensial salah | username: `admin`, password: `salah` | Muncul pesan error | Muncul "Username atau password salah" | ✅ Pass |
| 3 | Muat Data | Ambil data dari Google Sheets | Klik tombol "Muat Ulang Data" | Data alumni tampil dalam tabel | Data alumni berhasil ditampilkan | ✅ Pass |
| 4 | Pencarian | Cari alumni berdasarkan nama | Ketik sebagian nama alumni | Daftar alumni yang cocok tampil | Hasil pencarian sesuai kata kunci | ✅ Pass |
| 5 | Pencarian | Cari dengan nama yang tidak ada | Ketik nama tidak valid | Tampil pesan "Tidak ada data ditemukan" | Tabel kosong dengan pesan | ✅ Pass |
| 6 | Tambah Alumni | Tambah data alumni baru | Isi semua field dan klik Tambah | Data muncul di list alumni | Alumni baru berhasil ditambahkan | ✅ Pass |
| 7 | Tambah Alumni | Submit dengan field kosong | Klik Tambah tanpa mengisi nama | Muncul pesan validasi error | Muncul "Nama, Prodi, dan Tahun Lulus wajib diisi" | ✅ Pass |
| 8 | Verifikasi PDDikti | Verifikasi satu alumni | Input nama alumni, klik Verifikasi Satu | Halaman PDDikti terbuka dengan hasil pencarian | Tab baru PDDikti terbuka dengan query nama | ✅ Pass |
| 9 | Verifikasi PDDikti | Verifikasi semua alumni | Klik tombol "Verifikasi Semua" | Daftar seluruh alumni tampil dengan tombol cek | Semua alumni tampil beserta link PDDikti masing-masing | ✅ Pass |
| 10 | Verifikasi PDDikti | Tandai status verifikasi | Klik tombol ✅ atau ❌ per alumni | Status berubah dan tersimpan | Status tersimpan di localStorage | ✅ Pass |
| 11 | Logout | Keluar dari sistem | Klik tombol Logout | Kembali ke halaman login | Sesi terhapus, kembali ke login | ✅ Pass |
| 12 | Navigasi | Pindah antar tab | Klik menu sidebar | Halaman yang sesuai tampil | Tab berganti sesuai menu yang diklik | ✅ Pass |

### Tabel Pengujian Verifikasi PDDikti (Sampel Alumni UMM)

| No | Nama Alumni | Program Studi | Link Verifikasi PDDikti | Status |
|----|-------------|---------------|------------------------|--------|
| 1  | (sesuai data Google Sheets) | (sesuai data) | [Cek di PDDikti](https://pddikti.kemdiktisaintek.go.id/search/) | ⏳ Dicek manual |
| 2  | (sesuai data Google Sheets) | (sesuai data) | [Cek di PDDikti](https://pddikti.kemdiktisaintek.go.id/search/) | ⏳ Dicek manual |
| 3  | (sesuai data Google Sheets) | (sesuai data) | [Cek di PDDikti](https://pddikti.kemdiktisaintek.go.id/search/) | ⏳ Dicek manual |

> **Catatan:** Proses verifikasi dilakukan secara manual dengan membuka link PDDikti per alumni dan mencocokkan data nama, NIM, dan program studi. Status diperbarui setelah pengecekan manual selesai.

---

## ⚙️ Cara Menjalankan

1. Clone repository:
   ```bash
   git clone https://github.com/RhimaMuthiyaQanita/alumni-tracker.git
   ```
2. Buka file `index.html` di browser
3. Login dengan akun yang tersedia
4. Klik **Muat Ulang Data** untuk memuat data alumni dari Google Sheets
5. Gunakan fitur **Verifikasi PDDikti** untuk memverifikasi data alumni

---

## 📌 Catatan

- Data hanya digunakan untuk kepentingan pembelajaran
- Dilarang menyebarkan data untuk kepentingan lain
- Proses verifikasi PDDikti dilakukan secara manual — sistem membuka halaman PDDikti untuk setiap alumni

---

## 👩‍💻 Author

Dibuat oleh **Rhima Muthiya Qanita**  
NIM: 202310370311401 | Rekayasa Kebutuhan C
