let alumni = JSON.parse(localStorage.getItem("alumni")) || [
{
nama:"Budi",
prodi:"Informatika",
tahun:"2022",
pekerjaan:"Programmer"
}
];

// tampilkan saat pertama buka
tampilkan();

function tambahAlumni(){
let nama = document.getElementById("nama").value;
let prodi = document.getElementById("prodi").value;
let tahun = document.getElementById("tahun").value;
let pekerjaan = document.getElementById("pekerjaan").value;

if(nama === "" || prodi === "" || tahun === "" || pekerjaan === ""){
alert("Isi semua data dulu!");
return;
}

let data = {
nama:nama,
prodi:prodi,
tahun:tahun,
pekerjaan:pekerjaan
};

alumni.push(data);

// simpan ke localStorage
localStorage.setItem("alumni", JSON.stringify(alumni));

tampilkan();

// reset input
document.getElementById("nama").value="";
document.getElementById("prodi").value="";
document.getElementById("tahun").value="";
document.getElementById("pekerjaan").value="";
}

function tampilkan(){
let list = document.getElementById("listAlumni");
list.innerHTML="";

alumni.forEach((a, index)=>{
let item = document.createElement("li");

item.innerText = a.nama + " | " + a.prodi + " | " + a.tahun + " | " + a.pekerjaan;

// tombol hapus
let btn = document.createElement("button");
btn.innerText = " Hapus";
btn.onclick = function(){
hapusAlumni(index);
};

item.appendChild(btn);
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

hasil.forEach((a, index)=>{
let item = document.createElement("li");

item.innerText = a.nama + " | " + a.prodi + " | " + a.tahun + " | " + a.pekerjaan;

list.appendChild(item);
});
}

function hapusAlumni(index){
alumni.splice(index,1);
localStorage.setItem("alumni", JSON.stringify(alumni));
tampilkan();
}
