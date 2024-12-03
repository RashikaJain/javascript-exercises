const add = function(...valuesToAdd) {
  let sum = 0 ; 
  for(let x of valuesToAdd)
  {
    sum += x ; 
  }
  return sum ; 
};

const subtract = function(...values) {
  let sub ;
  for(let x of values)
  {
    if(values.indexOf(x)==0)
    {
      sub=x ; 
    }
    else
    {
      sub -= x ; 
    }
  }
  return sub ; 
};

const sum = function(arrayElements) {
  let totalSum = 0 ; 
  for(let x of arrayElements.values())
  {
    totalSum+= x ; 
  }
  return totalSum; 
};

const multiply = function(arr) {
  let multiplication = 1 ; 
  for(x of arr)
  {
    multiplication *= x ; 
  }
  return multiplication ; 
};

const power = function(value , powerForValue) {
  return Math.pow(value , powerForValue) ; 
};

const factorial = function(value) {
  let factorialOfValue = 1 ; 
  for(let i = value ; i >0 ;  i--)
  {
    factorialOfValue *= i ; 
  }
  return factorialOfValue ; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
