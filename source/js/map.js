

var map = (function () {


    function init() {
        var
            mapDiv = document.getElementById('map'),
            mapDiv1 = document.getElementById('map1'),
            isDraggable;

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            isDraggable = false;
        } else {
            isDraggable = true;
        }

        let mapOptions = {
            center: {
                lat: 55.853396,
                lng: 37.5002
            },
            zoom: 13,
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: isDraggable,
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#444444"}]
            }, {
                "featureType": "administrative.country",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#f2f2f2"}]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.attraction",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.government",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.medical",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.place_of_worship",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi.sports_complex",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{"saturation": -100}, {"lightness": 45}, {"visibility": "off"}]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "transit.station",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"color": "#6a6966"}, {"visibility": "simplified"}]
            }]
        }


        var map = new google.maps.Map(mapDiv, mapOptions),
            map1 = new google.maps.Map(mapDiv1 , mapOptions);
        google.maps.event.trigger(map, "resize");

    };


    return {
        init: init
    };

})();

window.onload = function() {
    map.init()
}