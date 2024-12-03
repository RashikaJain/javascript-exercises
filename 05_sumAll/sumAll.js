const sumAll = function(value1 , value2) {
    if( !Number.isInteger(value1) || !Number.isInteger(value2) ||
     value1 < 0 || value2 < 0 )
    {
        return "ERROR" ; 
    }
    let maxNumber = Math.max(value1 , value2) ; 
    let minNumber = Math.min(value1 , value2) ; 
    
    let total = 0 ;  
    for(let i = minNumber ; i<=maxNumber ; i++)
    {
        total += i ; 
    }
    return total ; 
};

// Do not edit below this line
module.exports = sumAll;
