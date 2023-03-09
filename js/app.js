function validateform () {
    const nama = document.forms["message-form"]["nama"].value;
    const tanggallahir = document.forms["message-form"]["tanggal-lahir"].value;
    const jeniskelamin = document.forms["message-form"]["jenis-kelamin"].value;
    const pesan = document.forms["message-form"]["pesan"].value;

    if (nama == "" || tanggallahir == "" || jeniskelamin == "" || pesan == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    } 

    setSenderUI(nama, tanggallahir, jeniskelamin, pesan);

    return false;
}

function setSenderUI(nama, tanggallahir, jeniskelamin, pesan) {
    document.getElementById("sender-nama").innerHTML = nama;
    document.getElementById("sender-tanggal-lahir").innerHTML = tanggallahir;
    document.getElementById("sender-jenis-kelamin").innerHTML = jeniskelamin;
    document.getElementById("sender-pesan").innerHTML = pesan;
}

`use strict`;
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);