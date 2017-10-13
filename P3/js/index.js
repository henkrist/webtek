//slideshow script
/*
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}
*/

//Nav.bar script

function toggle_meny(nav_name){
    var nav_bar = document.getElementById(nav_name);
    
    if(nav_bar.style.display === "block"){
        nav_bar.style.display = "none";
    }
    else{
        nav_bar.style.display = "block";
    }
}

function close_meny(nav_name){
    var nav_bar = document.getElementById(nav_name);
    nav_bar.style.display = "none";
}
