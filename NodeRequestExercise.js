var rp = require('request-promise');


var options = {
    uri: 'https://api.github.com/users/EMTelias/repos',
    qs: {
        access_token: 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true 
};

rp(options)
    .then(function (repos) {

        let repoLength = repos.length;
        let textNumbers = ['','is one ','are two ','are three '];

        if( repoLength == 0 ){

        	console.log( "No repositories" );

        } else if( repoLength > 0 && repoLength <= 3 ){

        	console.log( "There " + textNumbers[repoLength] + " repositories");

        } else {

        	console.log( "There are a lot of repositories" );

        }

    })
    .catch(function (err) {

        console.log( "I cannot connect to the server" );

    });
