var app = angular.module('AddressBookApp', []);

app.config(function($routeProvider) {
	$routeProvider
	.when('/Contacts', {
		controller : 'ContactsController',
		templateUrl : 'Contacts.html'
	})
	.when('/addContact', {
		controller : 'ContactsController',
		templateUrl : 'NewContact.html'
	})
	.when('/editContacts/:contactId', {
		controller : 'EditController',
		templateUrl : 'EditContact.html'
	})
	.otherwise({
		redirectTo : '/Contacts'
	});
});
