
function switchLang(){
    window.name ="no";
    var class_name = document.getElementsByClassName(window.name);
    for(var i = 0; i<class_name.length; i++){
        class_name[i].style.display = "none";
    }
    
}