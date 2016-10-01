var twit = require('twit');
var twit_params = require('./twit_params.js');

var T = new twit(twit_params);

T.get('search/tweets', { q: '描いてみた', count: 10 }, function(e,d,r) {
    d.statuses.map(function(st){
        if (st.extended_entities) {
            st.extended_entities.media.map(function(m){
                console.log(m.media_url);
            });
        }
    });
});

//
//T.get('users/suggestions/:slug', { slug: 'funny'  }, function (err, data, response) {
//    console.log(data);
//});

