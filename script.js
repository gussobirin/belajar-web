
function salam() {
    alert("Selamat! Anda berhasil belajar JavaScript.");
}

function tampilkanWaktu() {
    const waktu = new Date();
    document.getElementById("waktu").innerHTML =
        waktu.toLocaleString("id-ID");
}
