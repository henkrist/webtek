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

$('a[href^="#button"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
