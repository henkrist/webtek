/*
Funksjon til preloader.
*/

/*Definerer en variabel*/
var myVar;

/*Når siden lastes, vil det startes en timer som kaller neste funksjon*/
function setTimer() {
    myVar = setTimeout(showPage, 300);
}

/*Når denne funksjonen kalles, vil loaderen kalles og fjernes fra siden etter et gitt interval.*/
function showPage() {
    var loader = document.getElementById("all_loader");
    loader.style.opacity="0";
    setTimeout(function() {
        loader.style.display = "none";
    }, 200);
}

