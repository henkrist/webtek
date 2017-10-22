
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
