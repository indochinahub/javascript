
var person = {
    firsname : "Wittaya",
    lastname : "Wijit",
    getFullName : function(){
        return this.firsname + "  " + this.lastname;
    }
}

console.log( person.getFullName()); // "Wittaya  Wijit"

(function( language ){
    console.log(" Logged : " + this.getFullName());
    console.log(" language : " + language);

}.apply(person,["en"]))  ; //  "Logged : Wittaya  Wijit"
                        //  " language : en "




