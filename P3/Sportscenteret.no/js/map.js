
/*Kartfunksjonen er hentet fra Google på: https://developers.google.com/maps/documentation/javascript/adding-a-google-map 

Vi har tilpasset kooridnatene og zommen, samt styling av boksen til vårt formål.
For å kunne bruke kartet måtte vi gå til anskaffelse av en API-nøkkel.*/

function initMap() {
  var uluru = {lat: 78.220547, lng: 15.641144};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
