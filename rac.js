/* 
main page would have map
choose where it wants to go that day
add to travel log
add twitter ai bot
choose image from google images

https://dev.twitter.com/rest/reference/post/statuses/update

choose image from google images
https://dev.twitter.com/rest/reference/post/media/upload

making a simple twitterbot in javascript
http://www.bryanbraun.com/2014/12/13/how-to-set-up-a-simple-javascript-twitter-bot

twitter login: ractraveller
twitter password: racRP28

Consumer Key (API Key)	jfFV2jBcLwVwfqEHkBmY02eLd
Consumer Secret (API Secret)	c5U0HziWAr0ARNvaDiEOlvDbbATs8gNw3c14g6QNFiZyK27x64
Access Level	Read and write (modify app permissions)
Owner	ractraveller
Owner ID	747836254255886337


Access Token	747836254255886337-g2OxYV6NUGGAEHcp63RGSFbvZuTLjhg
Access Token Secret	88xHpKlgKLGbMInmdR3YqR42Ei89DfhGLBrFcrxQd5Q6g
Access Level	Read and write
Owner	ractraveller
Owner ID	747836254255886337

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


var map;
var marker;
var addressInput;
var center;

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);



function searchAddress() {

	addressInput = document.getElementById('address-input').value;
console.log(addressInput);
	var geocoder = new google.maps.Geocoder();
console.log(geocoder)
	geocoder.geocode({address: addressInput}, function(results, status) {

		if (status == google.maps.GeocoderStatus.OK) {

      myResult = results[0].geometry.location;

      createMarker(myResult);

      map.setCenter(myResult);

      map.setZoom(5);
		}
	});
}

function createMarker(latlng) {

  if(marker != undefined && marker != ''){
    marker.setMap(null);
    marker = '';
  }

  marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
}