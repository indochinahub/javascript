
var person = {
    firsname : "Wittaya",
    lastname : "Wijit",
    getFullName : function(){
        return this.firsname + "  " + this.lastname;
    }
}

var john = {
    firstname : "John",
    lastname : "Doe"
};

john.__proto__ = person;

// Show all properties of john
// some of which are from person.
for( var prop in john){
    console.log(prop, john[prop]);
}

// Show only properties of john
for( var prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop, john[prop]);
    }
}







