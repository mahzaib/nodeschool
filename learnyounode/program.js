var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var fileExtension = process.argv[3];

function filteredLs() {
  fs.readdir(dir, function doneReading(err, list) {
  	if (!err)
  	{
  		for (var i = 0; i < list.length; i++)
  		{
  			if (path.extname(list[i]) === ".".concat(fileExtension))
  			{
  				console.log(list[i]);
			}
  		}
  	}
  })
}

filteredLs();
