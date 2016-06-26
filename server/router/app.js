/**
 * Created by udit on 25/06/16.
 */

import bodyParser from 'body-parser';
import url from 'url';

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
			console.log(req);
			res.end("YOYO - created");
			break;
		case 'get':
		default:


			var reqUrl = url.parse(req.url,true);
			console.log(reqUrl);

			if ( reqUrl && reqUrl.query && reqUrl.query.create ) {
				console.log("ADD /tasks request");

				var data = reqUrl.query;

				delete data.create;
				if ( ! Array.isArray(data.assignees) ) {
					data.assignees = [ data.assignees ];
				}

				console.log(data);

				task.insert(data);

			} else {
				var tasks = task.find({}).fetch();

				console.log("GET /tasks request");

				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify(tasks));
			}
			break;
	}
} );