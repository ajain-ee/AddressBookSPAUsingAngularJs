app.service('contactsService', function() {

	this.getAllContacts = function() {
		return all_contacts.contacts;
	};

	this.addContact = function(contact) {
		all_contacts.contacts.push(contact);
	};

	this.deleteContact = function(contact) {
		var contacts = all_contacts.contacts;
		for ( var i = 0, ii = contacts.length; i < ii; i++) {
			if (contact === contacts[i]) {
				contacts.splice(i, 1);
			}
		}
	};
	
	this.getContactById = function(contactId){
		var contacts = all_contacts.contacts;
		for ( var i = 0, ii = contacts.length; i < ii; i++) {
			if (contactId == contacts[i].id) {
				return contacts[i];
			}
		}
		return "false";
	};


	this.saveEditContact = function(contact){
		var contacts = all_contacts.contacts;
		for ( var i = 0, ii = contacts.length; i < ii; i++) {
			if (contact.id == contacts[i].id) {
				this.deleteContact(contact);
				this.addContact(contact);
			}
		}
		return "false";
	};
	
	var all_contacts = {
		contacts : [ {
			"name" : "Essie	Vaill",
			"address1" : "14225 Hancock Dr",
			"address2" : "Bethel CT 06801",
			"city" : "Anchorage",
			"mobile" : "907-345-0962",
			"id": 1
		},

		{
			"name" : "Bernard	Laboy",
			"address1" : "2202 S Central Ave",
			"address2" : "2202 S Central Ave",
			"city" : "Phoenix",
			"mobile" : "602-252-4009",
			"id": 2
		},

		{
			"name" : "Billie Tinnes",
			"address1" : "28 W 27th St",
			"address2" : "28 W 27th St",
			"city" : "New York",
			"mobile" : "212-889-5775",
			"id": 3
		},

		{
			"name" : "Shelley	Groden",
			"address1" : "110 Broadway St",
			"address2" : "110 Broadway St",
			"city" : "San Antonio",
			"mobile" : "210-229-3017",
			"id": 4
		},

		{
			"name" : "Zackary	Mockus",
			"address1" : "286 State St",
			"address2" : "286 State St",
			"city" : "Perth Amboy",
			"mobile" : "732-442-0638",
			"id": 5
		},

		{
			"name" : "Lashawn	Hasty",
			"address1" : "815 S Glendora Ave",
			"address2" : "815 S Glendora Ave",
			"city" : "West Covina",
			"mobile" : "626-960-6738",
			"id": 6
		}

		]
	};

});
