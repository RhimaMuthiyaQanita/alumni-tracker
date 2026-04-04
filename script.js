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

// 🚀 JALANKAN
loadDataExcel();
