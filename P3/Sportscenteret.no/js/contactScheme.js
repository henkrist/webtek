/*Funksjon tilhørende kontaktskjemaet*/


/*Kjøres når "Submit"-knapen trykkes*/
function validateForm(){
    /*Henter data fra skjemaet*/
    var formInsert == document.forms["contact_from"].value;
    
    /*Sjekker om navnet er noe rimlig*/
    if (formInsert["name"].value == "" || formInsert["name"].value == " ") {
        alert("Name has to be filled out");
        return false;
    }
    /*Sjekker om emailen er noe rimlig. Funksjonen "findat" kalles, se under*/
    else if(formInsert["email"].value == "" || formInsert["email"].value == " " || findat(formInsert["email"].value) == "false"{
        alert("Insert a valid email adress");
        return false;
    }
    /*sjekker at meldingene er noe rimlig*/
    else if (formInsert["message"].value == "" || formInsert["message"].value == " ") {
        alert("You have to write something");
        return false;
    }
}


/*Går gjennom det som er skrevet, og sjekker om det er en faktisk email med et @-symbol*/
function findat(email){
    for (var i=0;i<email.length;i++){
      if(email[i] == "@"){
          return true;
          break;
      }  
        else{
            return false;
        }
    }
}