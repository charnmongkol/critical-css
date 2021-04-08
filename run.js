var criticalcss = require("criticalcss");
var fs = require('fs');


/* To generate output (critical CSS) */

// const rules = fs.readFileSync('rules.json', 'utf8');

// criticalcss.findCritical("https://wineswot.lexiconthai.dev/",  { rules: JSON.parse(rules) }, function(err, output){
// 	if( err ){
// 		throw new Error( err );
// 	} else {
// 		fs.writeFileSync( "output.txt", output );
//   }
// });

/* To generate rules.json */

criticalcss.getRules("./wineswot.css", {
	buffer: 8000 * 1024
},function(err, output){
	if( err ){
		throw new Error( err );
	} else {
		fs.writeFileSync( "rules.json", output );
  }
});