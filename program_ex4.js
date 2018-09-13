var fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
	let textFile = data.toString();
	let arrayText = textFile.split('\n');
	console.log(arrayText.length - 1);
});
