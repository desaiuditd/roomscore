/**
 * Created by udit on 20/06/16.
 */

/**
 * Dashboard / Home
 */
FlowRouter.route( '/', {
	triggersEnter: [ AccountsTemplates.ensureSignedIn ],
	name: 'home',
	action: function(params, queryParams) {

		Tracker.autorun( function () {
			BlazeLayout.render( 'home' );
		} );

	}
} );

/**
 * Tasks
 */
FlowRouter.route( '/tasks', {
	triggersEnter: [ AccountsTemplates.ensureSignedIn ],
	name: 'tasks',
	action: function (params, queryParams) {

		Tracker.autorun( function () {
			BlazeLayout.render( 'tasks' );
		} );

	}
} );

FlowRouter.route( '/tasks/review', {
	triggersEnter: [ AccountsTemplates.ensureSignedIn ],
	name: 'reviewTasks',
	action: function (params, queryParams) {

		Tracker.autorun( function () {
			BlazeLayout.render( 'reviewTasks' );
		} );

	}
} );

FlowRouter.route( '/tasks/new', {
	triggersEnter: [ AccountsTemplates.ensureSignedIn ],
	name: 'createTask',
	subscriptions: function(params, queryParams) {
		this.register('myRoommates', Meteor.subscribe('roommates'));
	},
	action: function (params, queryParams) {

		Tracker.autorun( function () {
			BlazeLayout.render( 'createTask' );
		} );

	}
} );

FlowRouter.route( '/tasks/:_id', {
	triggersEnter: [ AccountsTemplates.ensureSignedIn ],
	name: 'editTask',
	action: function (params, queryParams) {

		Tracker.autorun( function () {
			BlazeLayout.render( 'editTask' );
		} );

	}
} );

FlowRouter.route( '/profile/me', {
	triggersEnter: [ AccountsTemplates.ensureSignedIn ],
	name: 'myProfile',
	action: function (params, queryParams) {

		Tracker.autorun( function () {
			BlazeLayout.render( 'myProfile' );
		} );

	}
} );

FlowRouter.route( '/profile/:_username', {
	triggersEnter: [ AccountsTemplates.ensureSignedIn ],
	name: 'userProfile',
	action: function (params, queryParams) {

		Tracker.autorun( function () {
			BlazeLayout.render( 'userProfile' );
		} );

	}
} );

/**
 * Accounts Routes
 */
AccountsTemplates.configureRoute( 'changePwd', {
	name: 'changePwd',
	path: '/change-password',
} );
AccountsTemplates.configureRoute( 'enrollAccount', {
	name: 'enrollAccount',
	path: '/enroll-account',
} );
AccountsTemplates.configureRoute( 'forgotPwd', {
	name: 'forgotPwd',
	path: '/forgot-password',
} );
AccountsTemplates.configureRoute( 'resetPwd', {
	name: 'resetPwd',
	path: '/reset-password',
} );
AccountsTemplates.configureRoute( 'signIn', {
	name: 'signIn',
	path: '/login'
} );
AccountsTemplates.configureRoute( 'signUp', {
	name: 'signUp',
	path: '/register',
} );
AccountsTemplates.configureRoute( 'verifyEmail', {
	name: 'verifyEmail',
	path: '/verify-email',
} );
AccountsTemplates.configureRoute( 'resendVerificationEmail', {
	name: 'resendVerificationEmail',
	path: '/send-again',
} );
FlowRouter.route( '/logout', {
	name: 'logout',
	action: function ( params, queryParams ) {
		AccountsTemplates.logout();
	}
} );

/**
 * Misc Routes
 * */
FlowRouter.route( '/privacy', {
	name: 'privacy',
	action: function() {
		BlazeLayout.render('privacy');
	}
} );
FlowRouter.route( '/terms-of-use', {
	name: 'termsOfUse',
	action: function() {
		BlazeLayout.render('termsOfUse');
	}
} );

/**
 * 404
 */
FlowRouter.notFound = {
	action: function() {
		BlazeLayout.render('404');
	}
};
