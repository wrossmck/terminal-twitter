# terminal-twitter

A twitter cli made by [@wrossmck](http://twitter.com/wrossmck)

##Setup

Add twitter auth settings to a file called `auth.json` in properly formatted JSON like:
```
{
	"consumer_key":"key",
	"consumer_secret":"secret",
	"access_token_key":"key",
	"access_token_secret":"secret"
}
```
where consumer_key and consumer_secret are synonyms of api_key and api_secret from your dev.twitter.com application

## Usage Directions

* Get a [twitter developer account](http://dev.twitter.com)
* Set up a new App and get API auth and user access tokens
* run `node server.js` 
* tweet like `Hello, this is a tweet` followed by <return>
* you will get an error or a check followed by the tweet you just sent

## TODO

* make setup easy for non-twitter-devs. 
 * (a.k.a remove steps 1 and 2 from usage)
 * get the cli to ask for user credentials and do the auth by itself