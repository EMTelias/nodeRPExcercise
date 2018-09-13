var fs = require('fs');
const path = require('path');

var dirpath = process.argv[2];
var ext =  process.argv[3];

fs.readdir(process.argv[2], (err, list) => {
	const result = list.filter(file => path.extname(file) === '.' + ext);

	result.forEach(function(element) {
  		console.log(element);
	});
});
