// Thanks to John Patterson.
// See http://scn.sap.com/community/developer-center/front-end/blog/2014/01/05/sapui5-sdk-on-nodejs
var express = require('express'),
	open = require('open');
	app = express(),
	port = process.env.PORT || 8888,
	openui5 = '/openui5'
	url = 'http://localhost:' + port + openui5,// + "/latest";
	year = 60 * 60 * 24 * 365 * 1000;

// Use compress middleware to gzip content
app.use(express.compress());

//set default mime type to xml for ".library" files
express.static.mime.default_type = "text/xml";

// Serve up content directory showing hidden (leading dot) files
app.use(openui5,express.static(__dirname, { maxAge: year, hidden: true }));
// enable directory listening
app.use(openui5,express.directory(__dirname));

app.listen(port);
open("http://localhost:8888/openui5/latest"); //open in default browser
console.log("Static file server running at\n  => " + url + " \nCTRL + C to shutdown");
