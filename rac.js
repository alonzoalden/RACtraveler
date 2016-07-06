/* 
main page would have map
choose where it wants to go that day
add to travel log
add twitter ai bot
choose image from google images

///OTHER OPTIONS--------------------
-  
-  make up a list of favorite places travelled. Include "tour"
-  make twitter bot get results of city you tweet to it from other travel/documentary twitter accounts 
   (like a travel guide bot)
-  make up a "request to go to a place" and include waypoint from antarctica (his home)
-
///---------------------------------

https://dev.twitter.com/rest/reference/post/statuses/update

choose image from google images
https://dev.twitter.com/rest/reference/post/media/upload

making a simple twitterbot in javascript
http://www.bryanbraun.com/2014/12/13/how-to-set-up-a-simple-javascript-twitter-bot

twitter login: ractraveller
twitter password: racRP28

Consumer Key (API Key)  jfFV2jBcLwVwfqEHkBmY02eLd
Consumer Secret (API Secret)  c5U0HziWAr0ARNvaDiEOlvDbbATs8gNw3c14g6QNFiZyK27x64
Access Level  Read and write (modify app permissions)
Owner ractraveller
Owner ID  747836254255886337


Access Token  747836254255886337-g2OxYV6NUGGAEHcp63RGSFbvZuTLjhg
Access Token Secret 88xHpKlgKLGbMInmdR3YqR42Ei89DfhGLBrFcrxQd5Q6g
Access Level  Read and write
Owner ractraveller
Owner ID  747836254255886337

how to install node js
http://ursooperduper.github.io/2014/10/27/twitter-bot-with-node-js-part-1.html
*/




//---------------------------------------------------------------
//GOOGLE MAP
//--------------------------------------------------------------- 
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat:40.7413549, lng:-73.9980244},
//     zoom:13
    
//   });
// }

// GOOGLE MAPS API KEY: AIzaSyC-41Qlmz-7BmBW3Q6YzfdUVQ99niwUttk
var scotchApp = angular.module('scotchApp', ['ngRoute']);

    scotchApp.config(function($routeProvider) {
     $routeProvider
        //route for the home page
      .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the fav_list page
            .when('/fav_places', {
                templateUrl : 'pages/fav_places.html',
                controller  : 'contactController'
            });
    });

    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

scotchApp.controller('mainController', function($scope) {
  $scope.message = 'everyone come check me out!';
});


// var routes1 = []
// var sf1 = {
//   origin: "San Francisco, CA", 
//   destination: "Palo Alto, CA"
// },
// var sf2 = {
//   origin: "San Francisco, CA", 
//   destination: "golden gate bridge"
// },

// var sf3 = {
//   origin: "San Francisco, CA", 
//   destination: "santa cruz"
// }
// routes1.push(sf1)
// routes1.push(sf2)
// routes1.push(sf3)
// routes1.push(sf4)
// console.log(routes1)
// console.log(routes1, routes1[origin])
// var routes2 = [
// {origin: "San Francisco, CA", destination: "asdf"},
// {origin: "San Francisco, CA", destination: "asdf"},
// {origin: "San Francisco, CA", destination: "asdf"},
// ];

// var routes3 = [
// {origin: "San Francisco, CA", destination: "asdf"},
// {origin: "San Francisco, CA", destination: "asdf"},
// {origin: "San Francisco, CA", destination: "asdf"},
// ];

// var routes4 = [
// {origin: "San Francisco, CA", destination: "asdf"},
// {origin: "San Francisco, CA", destination: "asdf"},
// {origin: "San Francisco, CA", destination: "asdf"},
// ];

var map;
var marker;
var addressInput;
var city;
var center;
var circle;
var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var InfoWindow;

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
}

function searchAddress() {
  addressInput = document.getElementById('address-input').value;
  
  geocoder = new google.maps.Geocoder(); 
  geocoder.geocode({address: addressInput}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      myResult = results[0].geometry.location;
      codeAddress(myResult);
      map.setCenter(myResult);
        map.setZoom(10);
        // google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
        // map.setZoom(map.getZoom() + 3);
        // });
        // map.fitBounds(results[0].geometry.bounds);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    };
  });
  
  return addressInput;
  };
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
// // draws on user using GMaps
// var drawPlace = function drawPlace(place){
//  // map.removePolylines();
//   map.drawRoute({
//     origin: place.origin,
//     destination: place.destination,
//     strokeColor: place.strokeColor
//     }); // map.drawRoute()
// }; // drawOneUser()

// var drawAll = function drawAll(index){
//   index.forEach(function(place){
//     drawPlace(place);
//     }); // index.forEach()
//   }; // drawAllUsers()
// function calcRoute() {

//     var request = {
//         origin: "San Francisco, CA",
//         destination: "Los Angeles, CA",
//         travelMode: google.maps.DirectionsTravelMode.DRIVING
//     };

//     directionsService.route(request, function(response, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//         }
//     });
// }

var myResult;

// function searchAddress() {

//  addressInput = document.getElementById('address-input').value;
//  console.log(addressInput);
//  var geocoder = new google.maps.Geocoder();
//  console.log(geocoder)
//  geocoder.geocode({address: addressInput}, function(results, status) {
//    if (status == google.maps.GeocoderStatus.OK) {
//        myResult = results[0].geometry.location;
//        createMarker(myResult);
//        map.setCenter(myResult);
//        map.setZoom(10);
//    }
//  });
// }

// function codeAddress(latlng) {
//   if(marker != undefined && marker != ''){
//     marker.setMap(null);
//     marker = '';
//   }
//   marker = new google.maps.Marker({
//     map: map,
//     position: latlng
//   });
// }

//  function initialize() {
//   var mapProp = {
//     center:new google.maps.LatLng(51.508742,-0.120850),
//     zoom:5,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

//  console.log(city);

// console.log(addressInput)
// console.log(city);
// console.log(addressInput)

// var map1;

// function initMap() {
//         var directionsService = new google.maps.DirectionsService;
//         var directionsDisplay = new google.maps.DirectionsRenderer;
//         map1 = new google.maps.Map(document.getElementById('map'), {
//           zoom: 6,
//           center: {lat: 41.85, lng: -87.65}
//         });
//         directionsDisplay.setMap(map1);

      //  document.getElementById('submit').addEventListener('click', function() {
        //  calculateAndDisplayRoute(directionsService, directionsDisplay);
        
      

// function displayroute(directionsService, directionsDisplay) {

//    directionsService = new google.maps.DirectionsService;
//          directionsDisplay = new google.maps.DirectionsRenderer;

//         directionsService.route({
//           origin: "los angeles, ca",
//           destination: "palmdale, ca",
//           travelMode: google.maps.TravelMode.DRIVING
//         }, function(response, status) {
//           if (status === google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//       };