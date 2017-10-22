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

