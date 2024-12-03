const convertToCelsius = function(tempInFahrenheit) {
  const tempInCelcius = (tempInFahrenheit - 32) * 5/9 ; 
  const roundOffCelciusValue = (Math.round(tempInCelcius*10))/10 ;
  return roundOffCelciusValue ; 
};

const convertToFahrenheit = function(tempInCelcius) {
  const tempInFahrenheit = ((tempInCelcius*9)/5) + 32 ; 
  const roundOffFahrenhietValue = (Math.round(tempInFahrenheit*10))/10 ; 
  return roundOffFahrenhietValue ; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
