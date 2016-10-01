if (process.argv.length < 3) {
    console.log('missing argument.');
    return;
}

var search_word = process.argv[2];
var num_of_tweet = process.argv[3];

// twitter auth
var twit = require('twit');
var twit_params = require('./twit_params.js');

// google cloud api
var Vision = require('@google-cloud/vision');
var vision = Vision();

var T = new twit(twit_params);

var search_params = {
    q: search_word,
    count: parseInt(num_of_tweet),
    include_entities: true,
    locale: 'ja',
    result_type: 'mixed'
};

var image_urls = [];

var extract_image_urls = function(e,d,r) {
    d.statuses.map(function(st){
        if (st.extended_entities) {
            st.extended_entities.media.map(function(m){
                var url = m.media_url;
                vision.detectSafeSearch(url, function (err, safeSearch, apiResponse) {
                  if (safeSearch.adult) {
                      console.log('adult!');
                      console.log(url);
                  }
                  if (safeSearch.spoof) {
                      console.log('spoof!');
                      console.log(url);
                  }
                  if (safeSearch.medical) {
                      console.log('medical!');
                      console.log(url);
                  }
                  if (safeSearch.violence) {
                      console.log('violence!');
                      console.log(url);
                  }
                });
            });
        }
    });
};

T.get('search/tweets', search_params, extract_image_urls);


//
//T.get('users/suggestions/:slug', { slug: 'funny'  }, function (err, data, response) {
//    console.log(data);
//});

