//Initialiserende funsjon som blir kalt opp når body er lastet.
//Sjekker om det er første gang siden har blitt besøkt 
function initLang(){
    if(sessionStorage.getItem("language") == null){
        sessionStorage.setItem("language", "no");
    }
    setLang();
}

//Funksjon som skifter språk på siden til ønsket språk. 
function switchLang(lang){
    sessionStorage.setItem("language", lang);
    setLang();
}

//Funksjon som setter alle elementene på siden til rett språk.
//Dette gjøres ved å hide de elementene som er feil språk og
// block de elementene som er rett språk.
function setLang(){
    var current_lang = document.getElementsByClassName(sessionStorage.getItem("language"));
    var new_lang;
    
    if(sessionStorage.getItem("language") == "en"){
        new_lang = document.getElementsByClassName("no");
    }else{
        new_lang = document.getElementsByClassName("en");
    }
    
    for(var i = 0; i<current_lang.length; i++){
        current_lang[i].style.display = "block";
    }
    for(var i = 0; i<new_lang.length; i++){
        new_lang[i].style.display = "none";
    }
    openingLanguage();
}

