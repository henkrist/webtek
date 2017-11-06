function initLang(){
    if(sessionStorage.getItem("language") == null){
        sessionStorage.setItem("language", "en");
    }
    setLang();
}

function switchLang(lang){
    sessionStorage.setItem("language", lang);
    setLang();
}

function setLang(){
    var current_lang = document.getElementsByClassName(sessionStorage.getItem("language"));
    var new_lang;
    
    if(sessionStorage.getItem("language") == 'en'){
        new_lang = document.getElementsByClassName('no');
    }else{
        new_lang = document.getElementsByClassName('en');
    }
    
    for(var i = 0; i<current_lang.length; i++){
        current_lang[i].style.display = "block";
    }
    for(var i = 0; i<new_lang.length; i++){
        new_lang[i].style.display = "none";
    }
}

