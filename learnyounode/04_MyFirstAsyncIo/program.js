var fs = require('fs')
var lineNumbers;

function readNumLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
  	if (!err)
  	{
	    lineNumbers = fileContents.toString().split('\n').length - 1;
	    // Note: could print the number of lines here instead of the call back
	    callback(); // Execute callback - aka printLineNumbers()
  	}
  })
}

function printLineNumbers() {
	// Print number of lines in the callback function
 	console.log(lineNumbers);
}

readNumLines(printLineNumbers);
