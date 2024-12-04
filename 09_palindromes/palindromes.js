const palindromes = function (originalString) {
    let palindromeString = "" ;
    let originalStringToArray = originalString.split("") ;  // Filter applies only on arrays
    let specialSymbols = [" ",  "," ,"!" , "&" , "$" , "%" , "}" , "{" ,"|" , "\\" , "~" , "`" , "."] ; 
    let removeSymbols = originalStringToArray.filter(elem => {return !specialSymbols.includes(elem)});  
    let joinedString = removeSymbols.join("") ; 
    for(let x= joinedString.length-1; x>=0  ; x--)
    {
        palindromeString += joinedString[x] ; 
    }
    return (palindromeString.toLowerCase() === joinedString.toLowerCase()); 
};

// Do not edit below this line
module.exports = palindromes;
