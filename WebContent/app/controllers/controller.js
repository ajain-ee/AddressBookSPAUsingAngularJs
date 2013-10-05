app.controller('ContactsController', function($scope, contactsService) {
	init();
	function init() {
		$scope.contacts = contactsService.getAllContacts();
	};

	$scope.save = function() {
		contactsService.addContact($scope.form);
	};

	$scope.cancel = function() {
		$scope.form = "";
	};

	$scope.deleteContact = function(contact) {
		contactsService.deleteContact(contact);
	};
	
	
});

app.controller('EditController', function($scope, contactsService,$routeParams) {
	
	init();
	function init() {
		var contactId = $routeParams.contactId;
		$scope.form = angular.copy(contactsService.getContactById(contactId));
	};
	
	$scope.save = function() {
		contactsService.saveEditContact($scope.form);
	};

	$scope.cancel = function() {
		$location.path('/Contacts');
	};	
	
});
