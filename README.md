terminal-twitter
===========

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

* run `npm start` OR `node server.js`
* tweet like `Hello, this is a tweet`

## TODO

* make setup easy for non-twitter-devs.
* get the cli to ask for user credentials and do the auth by itself