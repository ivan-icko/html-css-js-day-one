function konvertuj() {

    var dugmad = document.getElementsByName("radio");

    if (dugmad[0].checked) {
        if (document.getElementById("unos").value == "") {
            alert("Niste uneli količinu novca koju želite da razmenite.")
        }
        var x = document.getElementById("unos").value;
        var ispis = x / 18256;
        document.getElementById("unos1").value = ispis;
    } else if (dugmad[1].checked) {
        if (document.getElementById("unos").value == "") {
            alert("Niste uneli količinu novca koju želite da razmenite.")
        }
        var x = document.getElementById("unos").value;
        var ispis = x / 575;
        document.getElementById("unos1").value = ispis;
    } else if (dugmad[2].checked) {
        if (document.getElementById("unos").value == "") {
            alert("Niste uneli količinu novca koju želite da razmenite.")
        }
        var x = document.getElementById("unos").value;
        var ispis = x / 77;
        document.getElementById("unos1").value = ispis;
    } else {
        alert("Cekiraj valutu!");
        document.getElementById("unos").value = "";
        document.getElementById("unos1").value = "";
    }
}
var cekiran = null;
document.getElementById("kriptologo5").addEventListener("click", function() {
    document.getElementById("bitkoin").checked = true;
    cekiran = true;
});
document.getElementById("kriptologo6").addEventListener("click", function() {
    document.getElementById("eth").checked = true;
    cekiran = true;
});
document.getElementById("kriptologo7").addEventListener("click", function() {
    document.getElementById("litecoin").checked = true;
    cekiran = true;
});



function provera() {
    var ime = document.getElementById("ime").value;
    var sifra = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var zaemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!email.match(zaemail) && !sifra.match(paswd) && cekiran != true) {
        alert("Greška! Molimo Vas da proverite vaše unose.");
    } else if (!email.match(zaemail) && !sifra.match(paswd)) {
        alert('Greška! Niste dobro uneli sifru i email.');
    } else if (ime == "") {
        alert("Greška! Molimo Vas da uneste vaše korisničko ime.")
    } else if (!sifra.match(paswd)) {
        alert('Greska! Sifra mora da bude duža od 8 karaktera i da sadrži bar jedno veliko slovo, broj i znak.');
        document.getElementById("password").value = "";
    } else if (!email.match(zaemail)) {
        alert('Greška! Niste dobro uneli email.');
        document.getElementById("email").value = "";
    } else if (cekiran != true) {
        alert("Molimo Vas čekirajte željenu kriptovalutu!")
    } else if (document.getElementById("unos1").value == "") {
        alert("Molimo Vas unesite novčani iznos koji želite da zamenite!")
    } else {
        alert("Uspešna rezervacija! Molimo Vas, proverite Vaš email.");
        document.getElementById("ime").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("unos").value = "";
        document.getElementById("unos1").value = "";
    }


}