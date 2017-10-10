
function validateForm(){
  var formInsert ==  document.forms["myFrom"]["fname"].vlaue
  if (formInsert == "" || formInsert == " ") {
    alert("Name has to be fuilled out");
    return false;
  }
}
