document.getElementById("signupForum").addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const konfirmasiEmail = document.getElementById("konfirmasiEmail").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    if (email !== konfirmasiEmail) {
        alert("Email dan Konfirmasi Email harus sama!");
        return;
    }

    if(password.length < 6) {
        alert("Kata Sandi harus minimal 6 kata!");
        return;
    }

    if(!terms) {
        alert("Anda harus menyetujui kententuan!");
        return;
    }

    alert(`Pendaftaran berhasil!\nNama: ${firstName} ${lastName}\nEmail: ${email}`);

    this.reset();
});