
var a = {};
var b = function(){};
var c = [];

// object in javascript have default prototypes
// which are objects
console.log(a.__proto__); // {...}

// functions in javascript have default prototypes
// which are functions
console.log(b.__proto__); // f(){}

// array in javascript have default prototypes
// which are arrays
console.log(c.__proto__); // [...]


//Objects don't have proto of proto
console.log(a.__proto__.__proto__); // nil

// Functions and arrays have proto of proto 
// which are (built-in core) objects.
console.log(b.__proto__.__proto__);  // {...}
console.log(c.__proto__.__proto__);  // {...}

var d = "Hello";


