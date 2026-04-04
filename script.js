let alumni = [];

// 🔥 LOAD DATA DARI GOOGLE SHEETS
function loadDataExcel() {
fetch("https://opensheet.elk.sh/19Q5RlqlZ2Wi1Y18gUcElKHvQak5JVNmykU5KIvrzdGM/1")
.then(res => res.json())
.then(data => {
console.log("DATA:", data);
alumni = data;
tampilkan();
})
.catch(err => {
console.log("ERROR:", err);
});
}

function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // akun sederhana
  if(user === "admin" && pass === "123"){
    localStorage.setItem("login", "true");

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    loadDataExcel(); // 🔥 TARUH DI SINI
  }
}

// cek saat pertama buka
if(localStorage.getItem("login") === "true"){
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}

// 🔥 TAMPILKAN DATA
function tampilkan(){
let list = document.getElementById("listAlumni");
list.innerHTML="";

alumni.forEach((a, index)=>{
let item = document.createElement("li");

item.innerText =
(a["Nama Lulusan"] || "-") + " | " +
(a["NIM"] || "-") + " | " +
(a["Tahun Masuk"] || "-") + " | " +
(a["Tanggal Lulus"] || "-") + " | " +
(a["Fakultas"] || "-") + " | " +
(a["Program Studi"] || "-");

list.appendChild(item);
});
}

// 🔥 CARI DATA
function cariAlumni(){
let keyword = document.getElementById("search").value.toLowerCase();

let hasil = alumni.filter(a =>
(a["Nama Lulusan"] || "").toLowerCase().includes(keyword)
);

let list = document.getElementById("listAlumni");
list.innerHTML="";

hasil.forEach((a)=>{
let item = document.createElement("li");

item.innerText =
(a["Nama Lulusan"] || "-") + " | " +
(a["NIM"] || "-") + " | " +
(a["Tahun Masuk"] || "-") + " | " +
(a["Tanggal Lulus"] || "-") + " | " +
(a["Fakultas"] || "-") + " | " +
(a["Program Studi"] || "-");

list.appendChild(item);
});
}
