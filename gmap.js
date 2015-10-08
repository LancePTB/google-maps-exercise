function initMap() {
  var theirLatLng = {lat: -25.363, lng: 131.044};
  var myLatLng = {lat: 49.2827, lng: 123.1207};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: myLatLng
  });

  var theirMarker = new google.maps.Marker({
    position: theirLatLng,
    map: map,
    title: 'Australia!'
  });

  var myMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Vancouver!'
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
}