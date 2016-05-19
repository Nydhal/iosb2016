// The backend, this will manage the twitter query and the Watson query

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '9hhjg4b6oPYWxREVwWhXqDdx3',
  consumer_secret: 'GaOYHqHNygfohOzAohaHVc692VsumK8vZ6OLdlvldMPSwI9KSX',
  access_token_key: '374820841-7SPHeG8mmyU21v4eAp9ekjo2eAFonwgaFHJnfB1t',
  access_token_secret: '2gxf6KQ9A8Cqjf0n1lEQA14Y9CnzmkV8jE2Fz0hzf1kgT'
});
 
var params = {screen_name: 'ZacharyFeinn'};
// client.get('statuses/user_timeline', params, function(error, tweets, response){
//   if (!error) {
//     console.log(tweets);
//   }
// });


// client.get('search/tweets', function(error, tweets, response){
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });

// var tweetsFound = [];

// client.get('search/tweets', {q: 'Trump'}, function(error, tweets, response) {
//    // console.log(tweets);
//    console.log("\n\n\n\n\n\n\n\n\n");
//    // console.log(tweets.statuses)
//    var count = 0;
//    for (var twt in tweets.statuses) {
//    	// console.log("\n\n\n\n\n\n\n\n\n");
//    	// console.log(tweets.statuses[twt].text);
//    	tweetsFound.push(tweets.statuses[twt].text)
//    	// tweetsFound[count] = tweets.statuses[twt].text;

//    }
//    logTweets();
//    count += 1;
//    // console.log(response);  // Raw response object.
// });

// function logTweets() {
// 	console.log(tweetsFound);
// }

// console.log("\n\n\n\n\n\n\n\n\n");
// for (var i = 0; i < tweetsFound.length; i++) {
// 	console.log(tweetsFound[i])
// }


// GOT THE WOEID

// LAT FOR CITRIX: 34.4301220
// LONG FOR CITRIX: -119.8771750

// client.get('trends/closest', {'lat':34.4301220, 'long':-119.8771750}, function(error, response) {
// 	console.log(response);
// });

// [ { name: 'Los Angeles',
//     placeType: { code: 7, name: 'Town' },
//     url: 'http://where.yahooapis.com/v1/place/2442047',
//     parentid: 23424977,
//     country: 'United States',
//     woeid: 2442047,
//     countryCode: 'US' } ]



// GET TRENDS NEAR LA

client.get('trends/place', {'id': 2442047}, function(error, trends, response) {
   // console.log(trends);
   console.log(JSON.stringify(trends[0].trends, null, 2));
   // console.log(response);  // Raw response object.
   makeTrendObject(trends[0].trends);
});

function getTweetText() {

}

function returnSortedTrendObjects() {

}

function makeTrendObject(trends) {
	var trendObj = [];
	var nullTrends = [];

	for (var trending in trends) {
		// console.log("\n\n\n\n");
		// console.log(trends[trending]);
		
		if (trends[trending].tweet_volume != null) {
			console.log(trends[trending].tweet_volume);
			trendObj.push(trends[trending]);
		}
		else {
			nullTrends.push(trends[trending]);
		}
	}

	// console.log(trends[0].tweet_volume);

	// var keysSorted = Object.keys('tweet_volume').sort(function(a,b){return trendObj[a]-trendObj[b]});
	// for (var ndx in keysSorted) {
	// 	console.log(trendObj[keysSorted[ndx]].tweet_volume);
	// }
	console.log("\n\n\n\n\n\n")
	trendObj = insertionSortTrends(trendObj);

	trendObj.reverse();
	// for (var ndx in nullTrends) {
	// 	trendObj.push(nullTrends[ndx]);
	// }

	for (var ndx in trendObj) {
		console.log("Trend: ", trendObj[ndx].name, "\nVolume: ", trendObj[ndx].tweet_volume);
	}

}


// http://codingmiles.com/sorting-algorithms-insertion-sort-using-javascript/
function insertionSortTrends(unsortedList) {
  var len = unsortedList.length;
  
  for(var i = 0; i < len; i++) {
    var tmp = unsortedList[i]; //Copy of the current element.
    /*Check through the sorted part and compare with the 
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && (unsortedList[j].tweet_volume > tmp.tweet_volume); j--) {
      //Shift the number
      unsortedList[j+1] = unsortedList[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    unsortedList[j+1] = tmp;
  }
  return unsortedList;
}
