var newContact = {};
var newAddress = {};

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

  newContact = new Contact(firstName, lastName);


  $('#name').empty().append("<span id='fullName'>" + newContact.fullName() + '</span>');

  $('#fullName').click(function(event){
    event.preventDefault();
    $(".results h2").text(newContact.fullName());
    $('ul').append('<li>' + newAddress.fullAddress() + '</li>');

  });
});

$('#address').submit(function(event){
  event.preventDefault();
  var streetName = $('#street').val();
  var cityName = $('#city').val();
  var stateName = $('#state').val();
  var zipName = $('#zip').val();

  newAddress = new Address(streetName, cityName, stateName, zipName);
  newContact.addresses.push(newAddress);

  $('#address input').val("");
});
