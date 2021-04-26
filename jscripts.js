

// long running function
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms ){}
    console.log("Finished function")
}

function clickHandler(){
    console.log("click Event");
}

document.addEventListener('click',clickHandler);

waitThreeSeconds();
console.log("Finished Execution");

waitThreeSeconds();
console.log("Finished Execution");







