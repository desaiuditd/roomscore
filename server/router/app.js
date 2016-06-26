/**
 * Created by udit on 25/06/16.
 */

import bodyParser from 'body-parser';

// Define our middleware using the Picker.middleware() method.
Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

var webhookRoute = Picker.filter(function(req, res) {
	// you can write any logic you want.
	// but this callback does not run inside a fiber
	// at the end, you must return either true or false
	return req.method == "POST" || req.method == "GET";
});

webhookRoute.route( '/api/tasks', function( params, req, res, next ) {
	switch( req.method ) {
		case 'post':
			res.end("YOYO - created");
			break;
		case 'get':
		default:
			var tasks = task.find({}).fetch();

			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(tasks));
			break;
	}
} );