var myVar;

function setTimer() {
    myVar = setTimeout(showPage, 700);
}

function showPage() {
    var loader = document.getElementById("all_loader");
    loader.style.opacity="0";
    setTimeout(function() {
        loader.style.display = "none";
    }, 200);
}