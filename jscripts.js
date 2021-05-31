
var person = {
    firsname : "Wittaya",
    lastname : "Wijit",
    getFullName : function(){
        return this.firsname + "  " + this.lastname;
    }
}

console.log( person.getFullName()); // "Wittaya  Wijit"

var logName = function( language ){
    console.log(" Logged : " + this.getFullName());
    console.log(" language : " + language);

}; 

var logPersonName = logName.bind(person);

console.log( logPersonName("en") ); 
    //  "Logged : Wittaya  Wijit"
    //  " language : en "





