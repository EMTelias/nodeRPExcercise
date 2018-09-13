var fs = require('fs')

let buffer = fs.readFileSync(process.argv[2]);
	let textFile = buffer.toString();
	let arrayText = textFile.split('\n');
	console.log(arrayText.length - 1);