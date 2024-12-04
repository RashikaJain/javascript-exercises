const findTheOldest = function(people) {
    let maxAge = Number.MIN_VALUE ; 
    let getname=  "none" ; 
    for(let x of people)
    {
        if(!x.yearOfDeath)
        {
            x.yearOfDeath = (new Date()).getFullYear() ; 
        }
        let diff = x.yearOfDeath - x.yearOfBirth ;  
        if(diff > maxAge)
            {
                maxAge = diff ;
                getname = x ; 
            } 

    }
    return getname ; 
};

// Do not edit below this line
module.exports = findTheOldest;
