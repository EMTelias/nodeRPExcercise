var rp = require('request-promise');


var options = {
    uri: 'https://api.github.com/users/EMTelias/repos',
    qs: {
        access_token: 'b2ce525018baba0e46f1b46cbc508bcf44420387'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true 
};

rp(options)
    .then(function (repos) {
        let repoLenght = repos.length;
        var textNumbers = ['','one ','two ','three '];
        if(repoLenght == 0){
        	console.log( "No repositories" );
        } else if(repoLenght > 0 && repoLenght <= 3){
        	console.log( textNumbers[repoLenght]);
        } else {
        	console.log( "There are a lot of repositories" );
        }
    })
    .catch(function (err) {
        // API call failed...
        console.log("I cannot connect to the server");
    });
