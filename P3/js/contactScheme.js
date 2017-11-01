
function validateForm(){
  var formInsert ==  document.forms["myFrom"]["fname"].value
  if (formInsert == "" || formInsert == " ") {
    alert("Name has to be filled out");
    return false;
  }
}
