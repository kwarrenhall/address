function Contact (first, last){
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
};

function Address (street, city, state, zip){
  this.streetName = street;
  this.cityName = city;
  this.stateName = state;
  this.zipName = zip;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.streetName + ' ' + this.cityName + ' , ' + this.stateName + ' ' + this.zipName;
}

$('#contact').submit(function (event){
event.preventDefault();
 var firstName = $('#firstName').val();
 var lastName = $('#lastName').val();
 var streetName = $('#street').val();
 var cityName = $('#city').val();
 var stateName = $('#state').val();
 var zipName = $('#zip').val();

 var newContact = new Contact(firstName, lastName);
 var newAddress = new Address(streetName, cityName, stateName, zipName);

 newContact.addresses.push(newAddress);

 $('ul').empty().append('<li>' + newContact.fullName() + '</li><li>' + newAddress.fullAddress() + '</li>');

 console.log(newAddress);
 console.log(newContact);
 console.log(newContact.addresses[0]);


});
