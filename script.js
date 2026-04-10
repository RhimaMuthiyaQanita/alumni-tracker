// ===========================
// DATA & STATE
// ===========================
let alumni = [];
let verifData = {}; // { nama: status } — "verified" | "notfound" | "pending"

const SHEET_URL = "https://opensheet.elk.sh/19Q5RlqlZ2Wi1Y18gUcElKHvQak5JVNmykU5KIvrzdGM/1";
const PDDIKTI_BASE = "https://pddikti.kemdiktisaintek.go.id/";
const PDDIKTI_SEARCH = "https://pddikti.kemdiktisaintek.go.id/search/";

// ===========================
// LOGIN / LOGOUT
// ===========================
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "123") {
    localStorage.setItem("login", "true");
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainPage").style.display = "flex";
    loadDataExcel();
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}

function logout() {
  localStorage.removeItem("login");
  location.reload();
}

// Cek session saat buka
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("login") === "true") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainPage").style.display = "flex";
    loadDataExcel();
  }

  // Load verif data dari localStorage
  const saved = localStorage.getItem("verifData");
  if (saved) verifData = JSON.parse(saved);
});

// ===========================
// LOAD DATA DARI GOOGLE SHEETS
// ===========================
function loadDataExcel() {
  const btn = document.querySelector(".topbar .btn-primary");
  if (btn) btn.innerText = "⏳ Memuat...";

  fetch(SHEET_URL)
    .then(res => res.json())
    .then(data => {
      alumni = data;
      updateStats();
      renderPreviewTable();
      renderDataTable(alumni);
      renderVerifList();
      if (btn) btn.innerText = "🔄 Muat Ulang Data";
      document.getElementById("dashboardMsg").style.display = "none";
    })
    .catch(err => {
      console.error("ERROR:", err);
      if (btn) btn.innerText = "🔄 Muat Ulang Data";
      document.getElementById("dashboardMsg").innerText = "❌ Gagal memuat data. Periksa koneksi internet.";
    });
}

// ===========================
// STATISTIK
// ===========================
function updateStats() {
  const total = alumni.length;
  const verified = Object.values(verifData).filter(v => v === "verified").length;
  const notFound = Object.values(verifData).filter(v => v === "notfound").length;
  const pending = total - verified - notFound;

  document.getElementById("statTotal").innerText = total;
  document.getElementById("statVerified").innerText = verified;
  document.getElementById("statPending").innerText = pending >= 0 ? pending : 0;
  document.getElementById("statNotFound").innerText = notFound;
  document.getElementById("badgeTotal").innerText = total + " data";
}

// ===========================
// RENDER TABLE
// ===========================
function renderTable(data, containerId) {
  const wrapper = document.getElementById(containerId);
  if (!data || data.length === 0) {
    wrapper.innerHTML = "<p class='text-muted'>Tidak ada data ditemukan.</p>";
    return;
  }

  const cols = ["Nama Lulusan", "NIM", "Tahun Masuk", "Tanggal Lulus", "Fakultas", "Program Studi"];
  let html = `<div class="table-wrapper"><table><thead><tr>`;
  cols.forEach(c => html += `<th>${c}</th>`);
  html += `</tr></thead><tbody>`;
  data.forEach(a => {
    html += `<tr>`;
    cols.forEach(c => html += `<td>${a[c] || "-"}</td>`);
    html += `</tr>`;
  });
  html += `</tbody></table></div>`;
  wrapper.innerHTML = html;
}

function renderPreviewTable() {
  renderTable(alumni.slice(0, 10), "previewTable");
}

function renderDataTable(data) {
  renderTable(data, "tableWrapper");
}

// ===========================
// CARI ALUMNI
// ===========================
function cariAlumni() {
  const keyword = document.getElementById("search").value.toLowerCase().trim();
  if (!keyword) {
    renderDataTable(alumni);
    return;
  }
  const hasil = alumni.filter(a =>
    (a["Nama Lulusan"] || "").toLowerCase().includes(keyword)
  );
  renderDataTable(hasil);
}

// ===========================
// TAMBAH ALUMNI
// ===========================
function tambahAlumni() {
  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const prodi = document.getElementById("prodi").value.trim();
  const tahun = document.getElementById("tahun").value.trim();
  const pekerjaan = document.getElementById("pekerjaan").value.trim();
  const msg = document.getElementById("tambahMsg");

  if (!nama || !prodi || !tahun) {
    msg.style.display = "block";
    msg.style.color = "var(--red)";
    msg.innerText = "❌ Nama, Prodi, dan Tahun Lulus wajib diisi.";
    return;
  }

  const newAlumni = {
    "Nama Lulusan": nama,
    "NIM": nim || "-",
    "Tahun Masuk": "-",
    "Tanggal Lulus": tahun,
    "Fakultas": "-",
    "Program Studi": prodi
  };

  alumni.unshift(newAlumni);
  updateStats();
  renderPreviewTable();
  renderDataTable(alumni);
  renderVerifList();

  // Reset form
  ["nama","nim","prodi","tahun","pekerjaan"].forEach(id => document.getElementById(id).value = "");
  msg.style.display = "block";
  msg.style.color = "var(--green)";
  msg.innerText = "✅ Alumni berhasil ditambahkan!";
  setTimeout(() => msg.style.display = "none", 3000);
}

// ===========================
// VERIFIKASI PDDikti
// ===========================

/**
 * Verifikasi satu alumni berdasarkan input nama
 */
function verifikasiSatu() {
  const nama = document.getElementById("verifNama").value.trim();
  if (!nama) {
    alert("Masukkan nama alumni terlebih dahulu.");
    return;
  }
  bukaVerifikasiPDDikti(nama);
}

/**
 * Verifikasi semua alumni — buka PDDikti untuk 5 alumni pertama
 * (mencegah terlalu banyak tab terbuka sekaligus)
 */
function verifikasiSemua() {
  if (alumni.length === 0) {
    alert("Data alumni belum dimuat. Klik 'Muat Ulang Data' terlebih dahulu.");
    return;
  }

  const container = document.getElementById("verifResult");
  container.innerHTML = "";
  document.getElementById("verifTableCard").style.display = "block";

  let html = "";
  alumni.forEach((a, i) => {
    const nama = a["Nama Lulusan"] || "-";
    const prodi = a["Program Studi"] || "-";
    const nim = a["NIM"] || "-";
    const status = verifData[nama] || "pending";

    const searchUrl = PDDIKTI_SEARCH + encodeURIComponent(nama);

    html += `
      <div class="verif-item" id="verif-${i}">
        <div>
          <div class="verif-name">${nama}</div>
          <div class="verif-meta">${nim} | ${prodi}</div>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <span class="status-badge ${getStatusClass(status)}" id="status-${i}">
            ${getStatusLabel(status)}
          </span>
          <a href="${searchUrl}" target="_blank" class="btn-cek"
             onclick="tandaiVerifikasi('${escapeStr(nama)}', ${i})">
            🔍 Cek PDDikti
          </a>
          <button class="btn-cek" onclick="setStatus('${escapeStr(nama)}', ${i}, 'verified')" title="Tandai Terverifikasi">✅</button>
          <button class="btn-cek" onclick="setStatus('${escapeStr(nama)}', ${i}, 'notfound')" title="Tandai Tidak Ditemukan" style="border-color:var(--red);color:var(--red);">❌</button>
        </div>
      </div>
    `;
  });

  document.getElementById("verifTableWrapper").innerHTML = html;
  document.getElementById("verifCount").innerText = alumni.length + " alumni";
  updateStats();
}

/**
 * Render ulang daftar verifikasi (setelah load data)
 */
function renderVerifList() {
  // hanya render kalau tab verifikasi sudah pernah dibuka
  const card = document.getElementById("verifTableCard");
  if (card.style.display !== "none") {
    verifikasiSemua();
  }
}

/**
 * Buka halaman pencarian PDDikti untuk nama tertentu
 */
function bukaVerifikasiPDDikti(nama) {
  const url = PDDIKTI_SEARCH + encodeURIComponent(nama);
  window.open(url, "_blank");

  const container = document.getElementById("verifResult");
  container.innerHTML = `
    <div class="verif-item">
      <div>
        <div class="verif-name">${nama}</div>
        <div class="verif-meta">Halaman PDDikti telah dibuka di tab baru</div>
      </div>
      <a href="${url}" target="_blank" class="btn-cek">🔍 Buka Lagi</a>
    </div>
  `;
}

/**
 * Tandai bahwa link PDDikti sudah dibuka (status pending → checked)
 */
function tandaiVerifikasi(nama, index) {
  if (verifData[nama] === "pending" || !verifData[nama]) {
    verifData[nama] = "pending";
    saveVerifData();
  }
}

/**
 * Set status verifikasi secara manual
 */
function setStatus(nama, index, status) {
  verifData[nama] = status;
  saveVerifData();

  const el = document.getElementById("status-" + index);
  if (el) {
    el.className = "status-badge " + getStatusClass(status);
    el.innerText = getStatusLabel(status);
  }
  updateStats();
}

function getStatusClass(status) {
  if (status === "verified") return "status-verified";
  if (status === "notfound") return "status-notfound";
  return "status-pending";
}

function getStatusLabel(status) {
  if (status === "verified") return "✅ Terverifikasi";
  if (status === "notfound") return "❌ Tidak Ditemukan";
  return "⏳ Belum Dicek";
}

function saveVerifData() {
  localStorage.setItem("verifData", JSON.stringify(verifData));
}

function escapeStr(s) {
  return s.replace(/'/g, "\\'");
}

// ===========================
// TAB NAVIGATION
// ===========================
function showTab(tabName) {
  // Sembunyikan semua tab
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));

  // Tampilkan tab yang dipilih
  document.getElementById("tab-" + tabName).classList.add("active");

  // Update judul
  const titles = {
    dashboard: "Dashboard",
    data: "Data Alumni",
    verifikasi: "Verifikasi PDDikti",
    tambah: "Tambah Alumni"
  };
  document.getElementById("pageTitle").innerText = titles[tabName] || tabName;

  // Set active nav
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    if (item.getAttribute("onclick") && item.getAttribute("onclick").includes(tabName)) {
      item.classList.add("active");
    }
  });

  // Kalau buka tab verifikasi dan data sudah ada, render otomatis
  if (tabName === "verifikasi" && alumni.length > 0) {
    verifikasiSemua();
  }

  return false;
}
