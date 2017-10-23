
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
  async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfANh0pOzgZE2_7V08uR-Zsx8lq_O7w1s&callback=initMap">
