console.log("The bot is starting");

var Twit 	= require('twit');
var config 	= require('./config');
// var randomizer 	= require('./randomizer');

var T = new Twit(config);
// var myTweet = randomizer;
// console.log(myTweet);



//-------------------------------------------------
// Setting up a user stream to reply to followers
//-------------------------------------------------

//Setting up a user stream
// var stream = T.stream('user');
// // Any time someone follows me
// stream.on('follow', followed);

// function followed(eventMsg){
// 	console.log("Follow Event");
// 	var name = eventMsg.source.name;
// 	var screenName = eventMsg.source.screen_name;
// 	tweetIt('@' + screenName + ' Travel');
// }


//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//-------------------------------------------------
// get tweets based off my search, in this case q: travel withing the params var
//-------------------------------------------------

var params = {
	q: 'is since:2011-07-11',
	count: 5,
	// geocode: [
 //      {
	//  "name": "San Francisco",
 //      "place_type": "city",
 //      }]

};
var mainArr = [];
T.get('search/tweets', params, gotData);
// var myArr = [];

function gotData(err, data, response) {
	var myArr = [];
	var tweets = data.statuses


//geocode loaction
// var users = o.twitter.get(), arr = new Array;
//         for (i in users){
//             var user = users[i];
//             $.getJSON('http://twitter.com/users/show/'+user+'.json?callback=?', function(data) {
//                 var img = data.profile_image_url,
//                     screen_name = data.screen_name;
//                 geocoder.geocode({ address: data.location }, function(response, status){
//                     if (status == google.maps.GeocoderStatus.OK) {
//                         var x = response[0].geometry.location.lat(),
//                             y = response[0].geometry.location.lng();
//                         marker = new google.maps.Marker({
//                             icon: img,
//                             map: map,
//                             title: screen_name,
//                             position: new google.maps.LatLng(x, y)
//                         });
	
	// for (var i = 0; i < tweets.length; i++) {
	// 	console.log(tweets[i].text);
	// 	tweets[i].text = tweets[i].text.replace("@\\w+ *", "");
	// 	tweets[i].text = tweets[i].text.replace("http\\w+ *", "");
	// 	tempArr = tweets[i].text.split(' ');
	// 	tempArr = tempArr.slice((tempArr.length/2) - 2,(tempArr.length/2) + 3);
	// 	console.log(tempArr);
	// 	tweets[i].text = tempArr.join(' ');
	// 	console.log(tweets[i].text);
	// 	mainArr.push(tweets[i].text);
	// }
		// arr.reduce(function(prev,current){
  //   	prev[current] = prev[current] === undefined ? 1 : prev[current] + 1;
  //   	return prev;
  //   	},{})
		

	tweets.forEach(function(text,i,tweets){
		console.log(tweets[i].text);
		tweets[i].text = tweets[i].text.replace("@\\w+ *", "");
		tweets[i].text = tweets[i].text.replace("http\\w+ *", "");
		tempArr = tweets[i].text.split(' ');
		tempArr = tempArr.slice((tempArr.length/2) - 2,(tempArr.length/2) + 3);
		console.log(tempArr);
		tweets[i].text = tempArr.join(' ');
		console.log(tweets[i].text);
		mainArr.push(tweets[i].text);
	});
	
	console.log(mainArr);
  return mainArr;
 };
//
console.log(mainArr);
//  get the list of user id's that follow @ractraveler
//
// T.get('followers/ids', { screen_name: 'ractraveler' },  function (err, data, response) {
//   console.log(data)
// })

//
//  tweet 'hello world!'
//-------------------------------------------------
// locations
//-------------------------------------------------
    // "locations": [
    //   {
    //     "name": "Worldwide",
    //     "woeid": 1
    //   }
//
//-------------------------------------------------
// tweet function posts a tweet based off random sentence from getTweet function
//-------------------------------------------------

// 
// tweetIt();

// //set tweet interval
// // setInterval(tweetIt, 1000*60*60);
// // setInterval(tweetIt, 1000*20);

// //post a status update tweet function using a random number to bypass twitters double post
// function tweetIt(txt) {
// 	var r = Math.floor(Math.random()*100);
// 	var tweet = {
// 		status: r + '.' + " " + myTweet + '.'
// 		// media
// 	}

// 	T.post('statuses/update', tweet, tweeted);

// 	function tweeted(err, data, response) {
// 		if (err) {
// 			console.log("Wrong");
// 		} else {
// 			console.log("it works");
// 		} 
// 	}
// }

