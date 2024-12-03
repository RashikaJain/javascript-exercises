const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 == 0  ;
    const isYearDivisibleBy400 = year%400 == 0 ; 
    const isYearDivisibleBy100 = year %100 == 0 ;
    if(isYearDivisibleByFour && 
    (isYearDivisibleBy400 || !isYearDivisibleBy100))
        {
            return true ; 
        } 
    else
    {
        return false ; 
    }
}

// Do not edit below this line
module.exports = leapYears;
