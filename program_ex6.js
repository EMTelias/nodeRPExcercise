var fs = require('fs');
const path = require('path');

var dirpath = process.argv[2];
var ext = process.argv[3];


var mymodule = require('./myModule.js')

mymodule(dirpath,ext,(err,data) => {
	if (err) { return console.error('There was an error:', err) }

	data.forEach(function(element) {
  		console.log(element);
	});
});
