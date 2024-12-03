const removeFromArray = function(arr , ...rest) {
    let array = arr.filter(item => {return !rest.includes(item)}); 
    return array ;
}                    
                                                                                        
// Do not edit below this line
module.exports = removeFromArray;
