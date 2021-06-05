
function mapForEach(arr, fn){

    var newArr = [];
    for( var i = 0; i < arr.length ; i++ ){
        newArr.push(fn(arr[i]))
    }
    return newArr;
}

/*******************************/
var arr1 = [1,2,3];
console.log(arr1);  // [1,2,3]

var arr2 = mapForEach(arr1, function(item){
    return item*2;
});
console.log(arr2);  // [2,4,6]

/*******************************/
// Pass another function
var arr3 = mapForEach(arr1, function(item){
    return item > 1;
});
console.log(arr3);  // [false, false, true]

/*******************************/
var checkPastLimit = function(limiter, item){
    return item > limiter;
};
// we set value of limiter to 1 
// and checkPastLimit  has only one parameter
var arr4 = mapForEach( arr1, checkPastLimit.bind(this, 1));
console.log(arr4);  // [false, true, true]


/*******************************/
var checkPastLimitSimplified = function(limiter){
    return function(limiter,item){
        console.log(item, limiter);
        return item > limiter
    }.bind(this, limiter);
};
var arr5 = mapForEach( arr1, checkPastLimitSimplified(1));
console.log(arr5);  // [false, true, true]



