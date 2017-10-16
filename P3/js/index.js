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

function toggle_meny(nav_name, nav_button_1, nav_button_2){
    var nav_bar = document.getElementById(nav_name);
    var nav_elem_1 = document.getElementById(nav_button_1);
    var nav_elem_2 = document.getElementById(nav_button_2);
    
    if(nav_bar.style.display === "block"){
        nav_bar.style.display = "none";
        nav_elem_1.style.backgroundColor = "#1c3f26";
    }
    else{
        nav_bar.style.display = "block";
        nav_elem_1.style.backgroundColor = "#b2722a";
        nav_elem_2.style.backgroundColor = "#1c3f26";
    }
}

function close_meny(nav_name, nav_button){
    var nav_bar = document.getElementById(nav_name);
    var nav_elem = document.getElementById(nav_button);
    nav_bar.style.display = "none";
    nav_elem.style.backgroundColor = "#1c3f26";
}

