var date = new Date();
var n = date.getDay();
var now = date.getHours() + "." + date.getMinutes();
var weekdays = [
    ["Sunday"], //Closed
    ["Monday", 10.00, 18.00],
    ["Tuesday", 10.00, 18.00],
    ["Wednesday", 10.00, 18.00],
    ["Thursday", 10.00, 18.00],
    ["Friday", 10.00, 18.00],
    ["Saturday", 10.00, 14.00]
];
var day = weekdays[n];
document.getElementById("timeDiv");

function openingLanguage() {
  if (sessionStorage.getItem("language") == "en") {
    if (now > day[1] && now < day[2]) {
        timeDiv.innerHTML = "Store is open";
        timeDiv.style.color = '#1fad4e';
        /* Sjekker om det er innen en time
        if ( (day[2]-now)<=1 && (day[2]-now)>0 ){
        timeDiv.innerHTML = "Store closing soon"
        timeDiv.style.color = '#ff8913';
        }
        */
    }
    else {
        timeDiv.innerHTML = "Store is closed";

        timeDiv.style.color = "#771424";
    }
  }
  else {
    if (now > day[1] && now < day[2]) {
        timeDiv.innerHTML = "Butikken er åpen";
        timeDiv.style.color = '#1fad4e';
        /* Sjekker om det er innen en time
        if ( (day[2]-now)<=1 && (day[2]-now)>0 ){
        timeDiv.innerHTML = "Butikken stenger snart"
        timeDiv.style.color = '#ff8913';
        }
        */
    }
    else {
        timeDiv.innerHTML = "Butikken er stengt";

        timeDiv.style.color = "#771424";
      }

    }
  }
