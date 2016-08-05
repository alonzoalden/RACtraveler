
//---------------------------------------------------------------
//Google Search
//--------------------------------------------------------------- 
// google.load('search', '1');

//     function OnLoad() {
//       // Create a search control
//       var searchControl = new google.search.SearchControl();

//       // Add in a full set of searchers
//       var localSearch = new google.search.LocalSearch();
//       searchControl.addSearcher(localSearch);
//       // searchControl.addSearcher(new google.search.WebSearch());
//       // searchControl.addSearcher(new google.search.VideoSearch());
//       // searchControl.addSearcher(new google.search.BlogSearch());
//       // searchControl.addSearcher(new google.search.NewsSearch());
//       // searchControl.addSearcher(new google.search.ImageSearch());
//       // searchControl.addSearcher(new google.search.BookSearch());
//       // searchControl.addSearcher(new google.search.PatentSearch());

//       // Set the Local Search center point
//       localSearch.setCenterPoint("New York, NY");

//       // tell the searcher to draw itself and tell it where to attach
//       searchControl.draw(document.getElementById("searchcontrol"));

//       // execute an inital search
//       searchControl.execute("VW GTI");
//     }
//     google.setOnLoadCallback(OnLoad);


//---------------------------------------------------------------
//TWITTER STUFF
//--------------------------------------------------------------- 
//---------------------------------------------------------------
//Making the tweet
//--------------------------------------------------------------- 

var randomizer = function(arr) {
  var randomize = Math.floor(Math.random()  * (arr.length - 0) + 0);
  console.log(randomize);
  return randomize;
}

var getTweet = function(location,noun,verb,adj){ // Gets he tempaerature, sunset, and sunrise times
  var city = ["San Francisco", "Chicago", "New York", "Dublin", "London", "Moscow"]
  var noun = ["account", "act", "addition", "adjustment", "advertisement", "agreement", "air", "amount", "amusement", "animal", "answer", "apparatus", "approval", "argument", "art", "attack", "attempt", "attention", "attraction", "authority", "back", "balance", "base", "behavior", "belief", "birth", "bit", "bite", "blood", "blow", "body", "brass", "bread", "breath", "brother", "building", "burn", "burst", "business", "butter", "canvas", "care", "cause", "chalk", "chance", "change", "cloth", "coal", "color", "comfort", "committee", "company", "comparison", "competition", "condition", "connection", "control", "cook", "copper", "copy", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "crush", "cry", "current", "curve", "damage", "danger", "daughter", "day", "death", "debt", "decision", "degree", "design", "desire", "destruction", "detail", "development", "digestion", "direction", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "doubt", "drink", "driving", "dust", "earth", "edge", "education", "effect", "end", "error", "event", "example", "exchange", "existence", "expansion", "experience", "expert", "fact", "fall", "family", "father", "fear", "feeling", "fiction", "field", "fight", "fire", "flame", "flight", "flower", "fold", "food", "force", "form", "friend", "front", "fruit", "glass", "gold", "government", "grain", "grass", "grip", "group", "growth", "guide", "harbor", "harmony", "hate", "hearing", "heat", "help", "history", "hole", "hope", "hour", "humor", "ice", "idea", "impulse", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "jelly", "join", "journey", "judge", "jump", "kick", "kiss", "knowledge", "land", "language", "laugh", "law", "lead", "learning", "leather", "letter", "level", "lift", "light", "limit", "linen", "liquid", "list", "look", "loss", "love", "machine", "man", "manager", "mark", "market", "mass", "meal", "measure", "meat", "meeting", "memory", "metal", "middle", "milk", "mind", "mine", "minute", "mist", "money", "month", "morning", "mother", "motion", "mountain", "move", "music", "name", "nation", "need", "news", "night", "noise", "note", "number", "observation", "offer", "oil", "operation", "opinion", "order", "organisation", "ornament", "owner", "page", "pain", "paint", "paper", "part", "paste", "payment", "peace", "person", "place", "plant", "play", "pleasure", "point", "poison", "polish", "porter", "position", "powder", "power", "price", "print", "process", "produce", "profit", "property", "prose", "protest", "pull", "punishment", "purpose", "push", "quality", "question", "rain", "range", "rate", "ray", "reaction", "reading", "reason", "record", "regret", "relation", "religion", "representative", "request", "respect", "rest", "reward", "rhythm", "rice", "river", "road", "roll", "room", "rub", "rule", "run", "salt", "sand", "scale", "science", "sea", "seat", "secretary", "selection", "self", "sense", "servant", "sex", "shade", "shake", "shame", "shock", "side", "sign", "silk", "silver", "sister", "size", "sky", "sleep", "slip", "slope", "smash", "smell", "smile", "smoke", "sneeze", "snow", "soap", "society", "son", "song", "sort", "sound", "soup", "space", "stage", "start", "statement", "steam", "steel", "step", "stitch", "stone", "stop", "story", "stretch", "structure", "substance", "sugar", "suggestion", "summer", "support", "surprise", "swim", "system", "talk", "taste", "tax", "teaching", "tendency", "test", "theory", "thing", "thought", "thunder", "time", "tin", "top", "touch", "trade", "transport", "trick", "trouble", "turn", "twist", "unit", "use", "value", "verse", "vessel", "view", "voice", "walk", "war", "wash", "waste", "water", "wave", "wax", "way", "weather", "week", "weight", "wind", "wine", "winter", "woman", "wood", "wool", "word", "work", "wound", "writing", "year"];
  var verb = ["accept", "add", "admire", "admit", "advise", "afford", "agree"]
  var adverb = ["abnormally", "absentmindedly", "absolutely", "abundantly", "accidentally", "accordingly", "actively"]
  var adj = ["able", "acid", "angry", "automatic", "awake", "bad", "beautiful", "bent", "bitter", "black", "blue", "boiling", "bright", "broken", "brown", "certain", "cheap", "chemical", "chief", "clean", "clear", "cold", "common", "complete", "complex", "conscious", "cruel", "cut", "dark", "dead", "dear", "deep", "delicate", "dependent", "different", "dirty", "dry", "early", "elastic", "electric", "equal", "false", "fat", "feeble", "female", "fertile", "first", "fixed", "flat", "foolish", "free", "frequent", "full", "future", "general", "good", "gray", "great", "green", "hanging", "happy", "hard", "healthy", "high", "hollow", "ill", "important", "kind", "last", "late", "left", "like", "living", "long", "loose", "loud", "low", "male", "married", "material", "medical", "military", "mixed", "narrow", "natural", "necessary", "new", "normal", "old", "open", "opposite", "parallel", "past", "physical", "political", "poor", "possible", "present", "private", "probable", "public", "quick", "quiet", "ready", "red", "regular", "responsible", "right", "rough", "round", "sad", "safe", "same", "second", "secret", "separate", "serious", "sharp", "short", "shut", "simple", "slow", "small", "smooth", "soft", "solid", "special", "sticky", "stiff", "straight", "strange", "strong", "sudden", "sweet", "tall", "thick", "thin", "tight", "tired", "true", "violent", "waiting", "warm", "wet", "white", "wide", "wise", "wrong", "yellow", "young"]
  var tweet = "";

  // var rand = Math.round(Math.random()  * (nouns.length - 0) + 0);
  // tweet = $('#tweeter').append(adverb[randomizer(adverb)] + " " + adj[randomizer(adj)]  + " " + noun[randomizer(noun)] + " "  +  verb[randomizer(verb)]  + " \n");
  tweet = ("I am in " + city[randomizer(city)] + "! " + noun[randomizer(noun)]  + " " + verb[randomizer(verb)] + "s" + " " + adverb[randomizer(adverb)] + " " + adj[randomizer(adj)]  + " " + noun[randomizer(noun)] + " \n");
  // console.log(tweet);
  // $('#tweeter').append("<p>Tweet: " + tweet + "</p>");
  return tweet;
}

 
$( "#tweeter" ).click(function( event ) {
  event.preventDefault();
  $("#tweeter").text(getTweet("Tweet"))
});


console.log(getTweet());

//---------------------------------------------------------------
//boyBook----
//--------------------------------------------------------------- 

var Twitter  = require('twitter-js-client').Twitter;
//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-js-client').Twitter;
// var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
"consumerKey": "jfFV2jBcLwVwfqEHkBmY02eLd",
"consumerSecret": "c5U0HziWAr0ARNvaDiEOlvDbbATs8gNw3c14g6QNFiZyK27x64",
"accessToken": "747836254255886337-g2OxYV6NUGGAEHcp63RGSFbvZuTLjhg",
"accessTokenSecret": "88xHpKlgKLGbMInmdR3YqR42Ei89DfhGLBrFcrxQd5Q6g",
"callBackUrl": "XXX"
}

var twitter = new Twitter(config);

//Example calls

twitter.getUserTimeline({ screen_name: 'ractraveller', count: '10'}, error, success);

twitter.getMentionsTimeline({ count: '10'}, error, success);

twitter.getHomeTimeline({ count: '10'}, error, success);

twitter.getReTweetsOfMe({ count: '10'}, error, success);

twitter.getTweet({ id: '1111111111'}, error, success);


//
// Get 10 tweets containing the hashtag haiku
//

twitter.getSearch({'q':'#haiku','count': 10}, error, success);

//
// Get 10 popular tweets with a positive attitude about a movie that is not scary 
//

twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);




Twitter.prototype.postTweet = function (params, error, success) {
    var path = '/statuses/update.json';
    var url = this.baseUrl + path;
    this.doPost(url, params, error, success);
};

//-----------------------------


// var _           = require('lodash');
// var Client      = require('node-rest-client').Client;
// var Twit        = require('twit');
// var async       = require('async');
// var wordFilter  = require('wordfilter'); 
// var Twitter  = require('twitter-js-client').Twitter;

// //Callback functions
// var error = function (err, response, body) {
//     console.log('ERROR [%s]', err);
// };
// var success = function (data) {
//     console.log('Data [%s]', data);
// };



// //Get this data from your twitter apps dashboard
// var config = {
//     "consumerKey": "jfFV2jBcLwVwfqEHkBmY02eLd",
//     "consumerSecret": "c5U0HziWAr0ARNvaDiEOlvDbbATs8gNw3c14g6QNFiZyK27x64",
//     "accessToken": "747836254255886337-g2OxYV6NUGGAEHcp63RGSFbvZuTLjhg",
//     "accessTokenSecret": "88xHpKlgKLGbMInmdR3YqR42Ei89DfhGLBrFcrxQd5Q6g",
//     "callBackUrl": "XXX"
// }


// var twitter = new Twitter(config);

// //Example calls

// twitter.getUserTimeline({ screen_name: 'ractraveler', count: '10'}, error, success);

//---------------------------------------------------------------
//SENTENCE MAKER
//--------------------------------------------------------------- 

/*//Extra Credit Random Sentence
var randomizer = function(arr) {
  var randomize = Math.floor(Math.random()  * (arr.length - 0) + 0);
  console.log(randomize);
  return randomize
}

var funny_sentence = function(){
  var noun = ["chain", "chair", "chalk", "cheetah", "chicken", "children", "chimpanzee"]
  var verb = ["accept", "add", "admire", "admit", "advise", "afford", "agree"]
  var adverb = ["abnormally", "absentmindedly", "absolutely", "abundantly", "accidentally", "accordingly", "actively"]
  var adj = ["calm", "careful", "cautious", "cheerful", "clean", "cloudy", "colorful"] 
  var sentence = "";
  // var rand = Math.round(Math.random()  * (nouns.length - 0) + 0);
  sentence = $('#output').append(adverb[randomizer(adverb)] + " " + adj[randomizer(adj)]  + " " + noun[randomizer(noun)] + " "  +  verb[randomizer(verb)]  + " \n");
  return sentence;
}
console.log(funny_sentence());
*/
/*
{
  "created_at": date(),
  "id": 747836254255886337,
  "id_str": "747836254255886337",
  "text": "Traveling!",
  "entities": {
    "hashtags": [],
    "symbols": [],
    "user_mentions": [],
    "urls": [],
    "media": [
      {
        "id": 747836254255886337,
        "id_str": "747836254255886337",
        "indices": [
          12,
          35
        ],
        "media_url": "http://pbs.twimg.com/media/Cc9FyscUkAEQaOw.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cc9FyscUkAEQaOw.jpg",
        "url": "https://t.co/R3P6waHxRa",
        "display_url": "pic.twitter.com/R3P6waHxRa",
        "expanded_url": "http://twitter.com/jeremycloud/status/706860403981099008/photo/1",
        "type": "photo",
        "sizes": {
          "medium": {
            "w": 600,
            "h": 398,
            "resize": "fit"
          },
          "small": {
            "w": 340,
            "h": 226,
            "resize": "fit"
          },
          "thumb": {
            "w": 150,
            "h": 150,
            "resize": "crop"
          },
          "large": {
            "w": 1024,
            "h": 680,
            "resize": "fit"
          }
        }
      }
    ]
  },
  "extended_entities": {
    "media": [
      {
        "id": 706860403746181121,
        "id_str": "706860403746181121",
        "indices": [
          12,
          35
        ],
        "media_url": "http://pbs.twimg.com/media/Cc9FyscUkAEQaOw.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Cc9FyscUkAEQaOw.jpg",
        "url": "https://t.co/R3P6waHxRa",
        "display_url": "pic.twitter.com/R3P6waHxRa",
        "expanded_url": "http://twitter.com/jeremycloud/status/706860403981099008/photo/1",
        "type": "photo",
        "sizes": {
          "medium": {
            "w": 600,
            "h": 398,
            "resize": "fit"
          },
          "small": {
            "w": 340,
            "h": 226,
            "resize": "fit"
          },
          "thumb": {
            "w": 150,
            "h": 150,
            "resize": "crop"
          },
          "large": {
            "w": 1024,
            "h": 680,
            "resize": "fit"
          }
        }
      }
    ]
  },
  "truncated": false,
  "source": "<a href=\"http://www.apple.com/\" rel=\"nofollow\">OS X</a>",
  "in_reply_to_status_id": null,
  "in_reply_to_status_id_str": null,
  "in_reply_to_user_id": null,
  "in_reply_to_user_id_str": null,
  "in_reply_to_screen_name": null,
  "user": {
    "id": 15062340,
    "id_str": "15062340",
    "name": "/dev/cloud/jeremy",
    "screen_name": "jeremycloud",
    "location": "Madison, Wisconsin",
    "description": "Professional yak shaver. Amateur bike shedder.",
    "url": "https://t.co/FcYeBkOpVY",
    "entities": {
      "url": {
        "urls": [
          {
            "url": "https://t.co/FcYeBkOpVY",
            "expanded_url": "http://about.me/jeremy.cloud",
            "display_url": "about.me/jeremy.cloud",
            "indices": [
              0,
              23
            ]
          }
        ]
      },
      "description": {
        "urls": []
      }
    },
    "protected": false,
    "followers_count": 4324,
    "friends_count": 410,
    "listed_count": 103,
    "created_at": "Mon Jun 09 17:00:58 +0000 2008",
    "favourites_count": 815,
    "utc_offset": -18000,
    "time_zone": "Central Time (US & Canada)",
    "geo_enabled": true,
    "verified": false,
    "statuses_count": 2218,
    "lang": "en",
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "000000",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_tile": false,
    "profile_image_url": "http://pbs.twimg.com/profile_images/436903139183054849/i_MbCcoW_normal.jpeg",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/436903139183054849/i_MbCcoW_normal.jpeg",
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/15062340/1447451621",
    "profile_link_color": "4A913C",
    "profile_sidebar_border_color": "000000",
    "profile_sidebar_fill_color": "000000",
    "profile_text_color": "000000",
    "profile_use_background_image": false,
    "has_extended_profile": true,
    "default_profile": false,
    "default_profile_image": false,
    "following": true,
    "follow_request_sent": false,
    "notifications": false
  },
  "geo": null,
  "coordinates": null,
  "place": null,
  "contributors": null,
  "is_quote_status": false,
  "retweet_count": 0,
  "favorite_count": 8,
  "favorited": false,
  "retweeted": false,
  "possibly_sensitive": false,
  "possibly_sensitive_appealable": false,
  "lang": "en"
}*/