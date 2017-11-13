//Nav.bar script

//Hvis ingen av menyene er åpne, åpnes den som blir trykt. Er en 
//av de åpne og man trykker på den andre, åpnes den nye og den gamle lukkes.
function toggle_meny(nav_name, nav_button_1, nav_button_2){
    //Skaffer id til elementene
    var nav_bar = document.getElementById(nav_name);
    var nav_elem_1 = document.getElementById(nav_button_1);
    var nav_elem_2 = document.getElementById(nav_button_2);
    
    //Sjuler den "andre" undermenyen
    if(nav_bar.style.display === "block"){
        nav_bar.style.display = "none";
        nav_elem_1.style.backgroundColor = "#1c3f26";
    }
    //Viser den menyen som har blitt trykket, og ender fargen på hovedmenyen slik at det ser ut som at den er trykket ned
    else{
        nav_bar.style.display = "block";
        nav_elem_1.style.backgroundColor = "#b2722a";
        nav_elem_2.style.backgroundColor = "#1c3f26";
    }
}

//Lukker menyene og setter fargene tilbake til grønn
function close_meny(nav_name, nav_button){
    var nav_bar = document.getElementById(nav_name);
    var nav_elem = document.getElementById(nav_button);
    nav_bar.style.display = "none";
    nav_elem.style.backgroundColor = "#1c3f26";
}

