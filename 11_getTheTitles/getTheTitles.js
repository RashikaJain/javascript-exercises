const getTheTitles = function(array) {
    let titleArray = [] ; 
    for(let x of array)
    {
        titleArray.push(x.title) ; 
    }
    return titleArray ; 
};

// Do not edit below this line
module.exports = getTheTitles;
