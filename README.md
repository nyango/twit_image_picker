twit_image_picker
----------------------


## Install
0. get and install `nodejs`, if you did not install it.
1. `$ npm install`

### Setup API Key
1. put your api keys(you can get them from https://apps.twitter.com/)
2. write them in a file named `twit_params.js` as following

```
module.exports = {
	consumer_key:         'YOUR CONSUMER KEY HERE',
	consumer_secret:      'YOUR CONSUMER SECRET KEY HERE',
	access_token:         'YOUR ACCESS TOKEN HERE',
	access_token_secret:  'YOUR ACCESS SECRET TOKEN HERE',
	app_only_auth:        true
};
```

## How to use
1. Install and Setup API Key, first.
2. `$ node myTwit.js` will show you image urls
