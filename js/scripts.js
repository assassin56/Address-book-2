//  Business Logic for Address Book --------------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();  
  this.contacts.push(contact);
}

AddressBook.prototype.findContact = function(id){
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]){
      if (this.contacts[i].id == id) {
        return this.contacts[i];
     }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
    if (this.contacts[i].id == id) {
      delete this.contacts[i];
      return true;
    }
   }
  };
  return false;
}

//  Business Logic for Address Book -------------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}


Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

//  User Interface Logic -----------

-

-

-

-

-

-

-

-

-

-

-

-

-

-

-

