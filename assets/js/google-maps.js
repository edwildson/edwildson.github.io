function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:-9.41348345447267,  lng: -40.51622580808352};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 16,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'UNIVASF, Juazeiro/BA' // Title Location
    });
}