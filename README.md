twit_image_picker
----------------------

It PICKS adult or medical or spoofs or violent images from Twitter using Google Cloud Vision API.

I added to zshrc like
```
export GOOGLE_APPLICATION_CREDENTIALS=/PATH/TO/CREDENTIAL/FILE
export GCLOUD_PROJECT=GOOGLE_API_ID
```


## Install
0. get and install `nodejs`, if you did not install it.
1. `$ npm install`

### Setup Twitter API Key
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

### Setup Google Cloud Vision API
1. setup according to https://cloud.google.com/vision/docs/quickstart

## How to use
1. Install and setup as above
2.
```
$ node getImages.js "WORD TO SEARCH" "num of tweets"
```
