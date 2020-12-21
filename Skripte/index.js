var datum = new Date("Jan 1, 2021 00:00:00").getTime();

var x = setInterval(function() {
    var sada = new Date().getTime();
    var razlika = datum - sada;
    var dani = Math.floor(razlika / (1000 * 60 * 60 * 24));
    var sati = Math.floor((razlika % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuti = Math.floor((razlika % (1000 * 60 * 60)) / (1000 * 60));
    var sekunde = Math.floor((razlika % (1000 * 60)) / 1000);
    document.getElementById("odbrojavanje1").innerHTML = dani + " dana " + sati + " časa " +
        minuti + " minuta " + sekunde + " sekundi ";

    if (razlika < 0) {
        clearInterval(x);
        document.getElementById("odbrojavanje1").innerHTML = "Akcija je istekla";
    }
}, 1000);