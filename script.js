let alumni = [];

function tambahAlumni(){
let nama = document.getElementById("nama").value;
let prodi = document.getElementById("prodi").value;
let tahun = document.getElementById("tahun").value;
let pekerjaan = document.getElementById("pekerjaan").value;

let data = {
nama:nama,
prodi:prodi,
tahun:tahun,
pekerjaan:pekerjaan
};

alumni.push(data);
tampilkan();
}

function tampilkan(){
let list = document.getElementById("listAlumni");
list.innerHTML="";

alumni.forEach(a=>{
let item = document.createElement("li");
item.innerText = a.nama + " | " + a.prodi + " | " + a.tahun + " | " + a.pekerjaan;
list.appendChild(item);
});
}

function cariAlumni(){
let keyword = document.getElementById("search").value.toLowerCase();

let hasil = alumni.filter(a =>
a.nama.toLowerCase().includes(keyword)
);

let list = document.getElementById("listAlumni");
list.innerHTML="";

hasil.forEach(a=>{
let item = document.createElement("li");
item.innerText = a.nama + " | " + a.prodi + " | " + a.tahun + " | " + a.pekerjaan;
list.appendChild(item);
});
}
