
function validateForm(){
    var formInsert == document.forms["contact_from"].value;
    
    if (formInsert["name"].value == "" || formInsert["name"].value == " ") {
        alert("Name has to be filled out");
        return false;
    }
    else if(formInsert["email"].value == "" || formInsert["email"].value == " " || findat(formInsert["email"].value) == "false"{
        alert("Insert a valid email adress");
        return false;
    }
    else if (formInsert["message"].value == "" || formInsert["message"].value == " ") {
        alert("You have to write something");
        return false;
    }
}

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