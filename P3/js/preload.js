var myVar;

function setTimer() {
    myVar = setTimeout(showPage, 300);
}

function showPage() {
    var loader = document.getElementById("all_loader");
    loader.style.opacity="0";
    setTimeout(function() {
        loader.style.display = "none";
    }, 200);
}