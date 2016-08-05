$( document ).ready(function() {
$("#heading_fav").hide();
$("#heading_about").hide();
});

function showhome() {
  $("#heading_main").show();
  $("#heading_fav").hide();
  $("#heading_about").hide();
};
function showfav() {
 $("#heading_main").hide();
 $("#heading_fav").show();
 $("#heading_about").hide();
};
function showabout() {
 $("#heading_main").hide();
 $("#heading_fav").hide();
 $("#heading_about").show();
}

// GOOGLE MAPS API KEY: AIzaSyC-41Qlmz-7BmBW3Q6YzfdUVQ99niwUttk

var map;
var marker;
var addressInput;
var city;
var center;
var circle;
var directionDisplay; // used for drawing routes - cancelled for changed plans
var directionsService = new google.maps.DirectionsService(); // used for drawing routes - cancelled for changed plans
var InfoWindow;

//The following loads google maps onto the webpage.
function initialize() {
  infowindow = new google.maps.InfoWindow();
directionsDisplay = new google.maps.DirectionsRenderer();
  var mapProp = {
    center:new google.maps.LatLng(-67.5519382,-11.3450925),
    zoom:2,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
directionsDisplay.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);


// The following searches on google maps for the city on the text input:
function searchAddress () {
    addressInput = document.getElementById('address-input').value;
      map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: addressInput}, function(results, status) {
     if (status == google.maps.GeocoderStatus.OK) {
        console.log("HELLO!")
        myResult = results[0].geometry.location;
        codeAddress(myResult);
      map.setCenter(myResult);
        map.setZoom(10);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    };
  });
  };

// The following adds a circle and a marker over the searched city.
function codeAddress(latlng) {
    if (marker != undefined && marker != ''){
            marker.setMap(null);
            marker = '';
    }
        if (circle != undefined && circle != ''){
            circle.setMap(null);
            circle = '';
    }
        marker = new google.maps.Marker({
            map: map,
          position: latlng
      });

        circle = new google.maps.Circle({
          center: marker.getPosition(),
          radius: 10000,
          fillColor: "#0000FF",
          fillOpacity: 0.1,
          map: map,
          strokeColor: "#FFFFFF",
          strokeOpacity: 0.1,
          strokeWeight: 2
      });
};


    var sydney = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];
    var sanfrancisco = [
      ['Alcatraz Island', 37.7814258, -122.5074688],
      ['Facebook Headquarters', 37.4848643, -122.1504751],
      ['Golden Gate Bridge', 37.8199328, -122.4804491],
      ['Alamo Square', 37.777753, -122.4377415],
      ['Hack Reactor', 37.7836887, -122.4112249],
    ];
    var losangeles = [
      ['Hollywood', 34.0938169, -118.3615835],
      ['Santa Monica Pier', 34.0098598, -118.4986302],
      ['Universal Studios', 34.1381212, -118.3555723],
      ['Makersquare', 34.0192882, -118.4965878],
      ['La Brea Tarpits', 34.063792, -118.3576277],
    ]

// The following displays the google maps at a certain location and several markers nearby the set location.
function clicker(location, lat, long) {
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 9,
      center: new google.maps.LatLng(lat,long),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < location.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[i][1], location[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(location[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));

    }
};
