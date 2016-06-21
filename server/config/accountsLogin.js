/**
 * Created by udit on 19/05/16.
 */

// Set up login services
Meteor.startup( function () {
	// Add Google configuration entry
	ServiceConfiguration.configurations.update(
		{
			service: "google"
		}, {
			$set: {
				clientId: "558303631720-sh6g8i485hdlhlqtmbopit79teruat91.apps.googleusercontent.com",
				client_email: "desaiuditd@gmail.com",
				secret: "Khok-ECldMhBdcbZqF5fLrtf"
			}
		}, {
			upsert: true
		}
	);

	// Add Facebook configuration entry
	ServiceConfiguration.configurations.update(
		{
			service: "facebook"
		}, {
			$set: {
				appId: "237168716645935",
				secret: "c9c64d4355791c38f411f12b9804978f"
			}
		}, {
			upsert: true
		}
	);
} );
