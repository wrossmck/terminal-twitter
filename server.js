var util = require('util');
var fs = require('fs');

var auth = require('./auth.json');
var twitter = require('ntwitter');
var twit = new twitter(auth);

function tweetrepl () {
	var stdin = process.openStdin();
	util.print('[Hello] Enter some text to tweet\n');
	util.print('> ');
	 
	stdin.on('data', function (line) {
		str = line.toString();
		if(str.length >= 140){
			str = str.substring(0,140);// truncates to 140 characters
			console.log("[Truncated] "+str);
		}
		console.log(str);
		// send req to twitter
		if(str.trim()!==""){
			twit.verifyCredentials(function (err, data) {
				if(err){console.log(err);}
			}).updateStatus(str,
				function (err, data) {
				if(err){console.log(err);}
				}
			);
		}
	util.print('> ');
	});
}

tweetrepl();
