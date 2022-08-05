function iniciarMap(){
    var coord = {lat:-34.7406171 ,lng: -56.087894};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
