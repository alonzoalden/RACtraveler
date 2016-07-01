console.log("The follow bot is starting");

var Twit 	= require('twit');
var config 	= require('./config');

var T = new Twit(config);

// Radmonizer

var randomizer = function(arr) {
  var randomize = Math.floor(Math.random()  * (arr.length - 0) + 0);
  // console.log(randomize);
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
  tweet = (city[randomizer(city)] + " " + noun[randomizer(noun)]  + " " + verb[randomizer(verb)] + "s" + " " + adverb[randomizer(adverb)] + " " + adj[randomizer(adj)]  + " " + noun[randomizer(noun)] + ". \n");
  // console.log(tweet);
  // $('#tweeter').append("<p>Tweet: " + tweet + "</p>");
  return tweet;
}

var myTweet = getTweet();
console.log(myTweet);

// Setting up a user stream
var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg){
	console.log("Follow Event");
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('@' + screenName + " Hi. " + myTweet);
}

// function
function tweetIt(txt) {
	var r = Math.floor(Math.random()*100);
	var tweet = {
		status: txt
		// media
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log("Wrong");
		} else {
			console.log("it works");
		} 
	}
}