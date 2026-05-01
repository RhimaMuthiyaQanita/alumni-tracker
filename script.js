// =============================================
// ALUMNI TRACKER - DATA & STORAGE MANAGEMENT
// Universitas Muhammadiyah Malang
// =============================================

const DB_KEY = 'umm_alumni_db';
const ADMIN_KEY = 'umm_admin_session';
const ALUMNI_KEY = 'umm_alumni_session';

// Seed data dari Excel
const SEED_DATA = [
  // === EKONOMI - AKUNTANSI ===
  { id: 1, nama: "Catur Rahmani Oktavia", nim: "95620625", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "catur.oktavia@gmail.com", no_hp: "81234567801", tempat_kerja: "PT. Bank Jatim", alamat_kerja: "Jl. Basuki Rahmat No. 50, Surabaya", posisi: "Senior Accountant", status: "Swasta", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 2, nama: "Indayati", nim: "95620626", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "indayati75@gmail.com", no_hp: "85678901234", tempat_kerja: "Dinas Pendapatan Daerah Kab. Malang", alamat_kerja: "Jl. Basoeki No. 12, Malang", posisi: "Kepala Bidang Akuntansi", status: "PNS", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 3, nama: "Assa Idhika", nim: "95620628", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "assa.idhika@gmail.com", no_hp: "82345678912", tempat_kerja: "PT. Unilever Indonesia", alamat_kerja: "Jl. Raya Surabaya - Malang Km 12", posisi: "Finance Supervisor", status: "Swasta", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 4, nama: "Yuli Ika Yanti", nim: "95620636", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "yuliikayanti@gmail.com", no_hp: "81987654321", tempat_kerja: "KPP Pratama Surabaya Barat", alamat_kerja: "Jl. Ahmad Yani No. 100, Surabaya", posisi: "Account Representative", status: "PNS", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 5, nama: "Gunawan", nim: "95620639", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "gunawan.ac@gmail.com", no_hp: "85712345678", tempat_kerja: "PT. Sido Muncul", alamat_kerja: "Jl. Raya Semarang No. 88, Semarang", posisi: "Staff Akuntansi", status: "Swasta", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 6, nama: "Hery Purwanto", nim: "95620640", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "herypurwanto68@gmail.com", no_hp: "81567890123", tempat_kerja: "PT. Gudang Garam Tbk", alamat_kerja: "Jl. Semampir No. 45, Kediri", posisi: "Manager Keuangan", status: "Swasta", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 7, nama: "Wiwik Irma Suryani", nim: "95620643", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "wiwikirmas@gmail.com", no_hp: "82198765432", tempat_kerja: "Kantor Akuntan Publik Ernst & Young", alamat_kerja: "Jl. Embong Malang No. 25, Surabaya", posisi: "Auditor Senior", status: "Swasta", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 8, nama: "Panca Ambar Susanggono", nim: "95620649", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "panca.ambar@gmail.com", no_hp: "85634567890", tempat_kerja: "CV. Maju Jaya Abadi", alamat_kerja: "Jl. Veteran No. 67, Jombang", posisi: "Owner / Wirausaha", status: "Wirausaha", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 9, nama: "Khoirul Ibadah", nim: "95620650", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "khoirulibadah@gmail.com", no_hp: "81345678901", tempat_kerja: "BPKAD Kabupaten Pasuruan", alamat_kerja: "Jl. Soekarno Hatta No. 33, Pasuruan", posisi: "Kasubbag Akuntansi", status: "PNS", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 10, nama: "Adi Nugroho", nim: "95620663", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ekonomi", prodi: "Akuntansi", email: "adinugroho76@gmail.com", no_hp: "82456789012", tempat_kerja: "PT. Petrokimia Gresik", alamat_kerja: "Jl. Raya Gresik No. 99, Gresik", posisi: "Staff Keuangan", status: "Swasta", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  // === AGAMA ISLAM - TARBIYAH (data kosong) ===
  { id: 11, nama: "Farida Yuliati", nim: "91110014", tahun_masuk: "1991", tanggal_lulus: "1 Juli 2000", fakultas: "Agama Islam", prodi: "Pendidikan Agama Islam (Tarbiyah)", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 12, nama: "Is Syamsijar Rochmah", nim: "91110045", tahun_masuk: "1991", tanggal_lulus: "1 Juli 2000", fakultas: "Agama Islam", prodi: "Pendidikan Agama Islam (Tarbiyah)", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 13, nama: "Herli Antoni", nim: "93110037", tahun_masuk: "1993", tanggal_lulus: "1 Juli 2000", fakultas: "Agama Islam", prodi: "Pendidikan Agama Islam (Tarbiyah)", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 14, nama: "Kunthi Kusumawati", nim: "93110046", tahun_masuk: "1993", tanggal_lulus: "1 Juli 2000", fakultas: "Agama Islam", prodi: "Pendidikan Agama Islam (Tarbiyah)", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 15, nama: "Nurkholik", nim: "94110030", tahun_masuk: "1994", tanggal_lulus: "1 Juli 2000", fakultas: "Agama Islam", prodi: "Pendidikan Agama Islam (Tarbiyah)", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  // === HUKUM - ILMU HUKUM ===
  { id: 16, nama: "Abdurrahim Wahid", nim: "89410639", tahun_masuk: "1989", tanggal_lulus: "1 Juli 2000", fakultas: "Hukum", prodi: "Ilmu Hukum", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 17, nama: "Titik Setyo Wati", nim: "92410037", tahun_masuk: "1992", tanggal_lulus: "1 Juli 2000", fakultas: "Hukum", prodi: "Ilmu Hukum", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 18, nama: "Ahmad Badawi", nim: "94400028", tahun_masuk: "1994", tanggal_lulus: "1 Juli 2000", fakultas: "Hukum", prodi: "Ilmu Hukum", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  // === ILMU SOSIAL - KOMUNIKASI ===
  { id: 19, nama: "Aisyah Ulfah", nim: "92220010", tahun_masuk: "1992", tanggal_lulus: "1 Juli 2000", fakultas: "Ilmu Sosial dan Ilmu Politik", prodi: "Ilmu Komunikasi", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 20, nama: "Bambang Margono", nim: "95220006", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Ilmu Sosial dan Ilmu Politik", prodi: "Ilmu Komunikasi", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  // === PSIKOLOGI ===
  { id: 21, nama: "Andri Iswahyudi", nim: "91810005", tahun_masuk: "1991", tanggal_lulus: "1 Juli 2000", fakultas: "Psikologi", prodi: "Psikologi", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 22, nama: "Kabul Hidayat", nim: "91810018", tahun_masuk: "1991", tanggal_lulus: "1 Juli 2000", fakultas: "Psikologi", prodi: "Psikologi", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  // === PERTANIAN ===
  { id: 23, nama: "Wahyudie", nim: "93720013", tahun_masuk: "1993", tanggal_lulus: "1 Juli 2000", fakultas: "Pertanian", prodi: "Sosial Ekonomi Pertanian", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 24, nama: "Bambang Subiyakto", nim: "91710263", tahun_masuk: "1991", tanggal_lulus: "1 Juli 2000", fakultas: "Pertanian", prodi: "Budidaya Pertanian", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  // === KEGURUAN ===
  { id: 25, nama: "Aries Ratnawati", nim: "95320007", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Keguruan dan Ilmu Pendidikan", prodi: "Pendidikan Matematika", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 26, nama: "Imam Fahrudin", nim: "95360003", tahun_masuk: "1995", tanggal_lulus: "1 Juli 2000", fakultas: "Keguruan dan Ilmu Pendidikan", prodi: "Pendidikan Bahasa Inggris", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  // === PASCASARJANA ===
  { id: 27, nama: "Widji Eljanto", nim: "93102035", tahun_masuk: "1993", tanggal_lulus: "1 Juli 2000", fakultas: "Pascasarjana", prodi: "Magister - Sosiologi Pedesaan", email: "widjieljanto@gmail.com", no_hp: "82345678934", tempat_kerja: "PT. Astra International Tbk", alamat_kerja: "Jl. Tunjungan No. 60, Surabaya", posisi: "Finance Supervisor", status: "Swasta", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 28, nama: "Andi Moh Arpan", nim: "98101013", tahun_masuk: "1998", tanggal_lulus: "1 Juli 2000", fakultas: "Pascasarjana", prodi: "Magister - Manajemen", email: "andimoharpan@gmail.com", no_hp: "81876543278", tempat_kerja: "PT. Garudafood Putra Putri Jaya", alamat_kerja: "Jl. Raya Surabaya-Mojokerto Km 15", posisi: "Accounting Supervisor", status: "Swasta", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  // === PETERNAKAN ===
  { id: 29, nama: "Titok Hardjianto", nim: "90915245", tahun_masuk: "1990", tanggal_lulus: "1 Juli 2000", fakultas: "Peternakan - Perikanan", prodi: "Produksi Ternak", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
  { id: 30, nama: "Imam Kamawi", nim: "93920003", tahun_masuk: "1993", tanggal_lulus: "1 Juli 2000", fakultas: "Peternakan - Perikanan", prodi: "Teknologi Industri Peternakan", email: "", no_hp: "", tempat_kerja: "", alamat_kerja: "", posisi: "", status: "", linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" },
];

// =============================================
// DATABASE FUNCTIONS
// =============================================

function initDB() {
  if (!localStorage.getItem(DB_KEY)) {
    localStorage.setItem(DB_KEY, JSON.stringify(SEED_DATA));
  }
}

function getAllAlumni() {
  return JSON.parse(localStorage.getItem(DB_KEY)) || [];
}

function getAlumniByNIM(nim) {
  return getAllAlumni().find(a => a.nim === nim.trim());
}

function getAlumniByNIMAndProdi(nim, prodi) {
  return getAllAlumni().find(a => a.nim === nim.trim() && a.prodi === prodi.trim());
}

function updateAlumni(nim, data) {
  const all = getAllAlumni();
  const idx = all.findIndex(a => a.nim === nim);
  if (idx !== -1) {
    all[idx] = { ...all[idx], ...data };
    localStorage.setItem(DB_KEY, JSON.stringify(all));
    return true;
  }
  return false;
}

function addAlumni(data) {
  const all = getAllAlumni();
  const exists = all.find(a => a.nim === data.nim);
  if (exists) return false;
  const newId = Math.max(...all.map(a => a.id)) + 1;
  all.push({ id: newId, ...data, linkedin: "", instagram: "", facebook: "", tiktok: "", sosmed_tempat_kerja: "" });
  localStorage.setItem(DB_KEY, JSON.stringify(all));
  return true;
}

function isDataFilled(alumni) {
  return alumni.email || alumni.no_hp || alumni.tempat_kerja || alumni.posisi;
}

function getStats() {
  const all = getAllAlumni();
  const filled = all.filter(a => isDataFilled(a));
  return {
    total: all.length,
    filled: filled.length,
    empty: all.length - filled.length
  };
}

// =============================================
// SESSION FUNCTIONS
// =============================================

function adminLogin(username, password) {
  if (username === 'admin' && password === 'admin123') {
    sessionStorage.setItem(ADMIN_KEY, 'true');
    return true;
  }
  return false;
}

function alumniLogin(nim, prodi) {
  const alumni = getAlumniByNIMAndProdi(nim, prodi);
  if (alumni) {
    sessionStorage.setItem(ALUMNI_KEY, JSON.stringify({ nim: alumni.nim, nama: alumni.nama }));
    return alumni;
  }
  return null;
}

function isAdminLoggedIn() {
  return sessionStorage.getItem(ADMIN_KEY) === 'true';
}

function isAlumniLoggedIn() {
  return sessionStorage.getItem(ALUMNI_KEY) !== null;
}

function getAlumniSession() {
  return JSON.parse(sessionStorage.getItem(ALUMNI_KEY));
}

function logout() {
  sessionStorage.removeItem(ADMIN_KEY);
  sessionStorage.removeItem(ALUMNI_KEY);
}

// List prodi untuk dropdown
const PRODI_LIST = [
  "Akuntansi",
  "Ilmu Ekonomi dan Studi Pembangunan",
  "Manajemen",
  "Magister - Sosiologi Pedesaan",
  "Magister - Manajemen",
  "Pendidikan Agama Islam (Tarbiyah)",
  "Ahwal Al-Syakhsyiyyah (Syari'ah)",
  "Ilmu Hukum",
  "Ilmu Kesejahteraan Sosial",
  "Ilmu Komunikasi",
  "Ilmu Pemerintahan",
  "Pendidikan Matematika",
  "Pendidikan Bahasa dan Sastra Indonesia",
  "Pendidikan Bahasa Inggris",
  "Pendidikan Biologi",
  "Sosial Ekonomi Pertanian",
  "Budidaya Pertanian",
  "Produksi Ternak",
  "Teknologi Industri Peternakan",
  "Psikologi"
];

const FAKULTAS_LIST = [
  "Ekonomi",
  "Pascasarjana",
  "Agama Islam",
  "Hukum",
  "Ilmu Sosial dan Ilmu Politik",
  "Keguruan dan Ilmu Pendidikan",
  "Pertanian",
  "Peternakan - Perikanan",
  "Psikologi"
];

// Init on load
initDB();
