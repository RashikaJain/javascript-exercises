const reverseString = function(demoString) {
    let str = "" ; 
    for(let i=demoString.length-1 ; i>=0 ; i-- )
    {
        str += demoString[i] ; 
    }
    return str ; 
};

// Do not edit below this line
module.exports = reverseString;
