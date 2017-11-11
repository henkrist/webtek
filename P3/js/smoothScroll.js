
/* Denne funksjonen funker ikke, og jeg fikk ikke tid til å få den til å funke :) */
/*function scrollTo(document.body, document.getElementById("aboutus").offsetTop, 600) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
*/


/*En mer hakkete måte å gjøre det på:*/
/*onClick="document.getElementById('aboutus').scrollIntoView();"*/