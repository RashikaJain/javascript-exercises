const fibonacci = function(fibo) {
    if(fibo < 0)
    {
        return "OOPS" ; 
    }
    if(fibo == 0)
    {
        return 0 ; 
    }
    if(fibo == 1 || fibo== 2)
    {
        return 1 ; 
    }
    return fibonacci(fibo-1) + fibonacci(fibo - 2) ; 
};

// Do not edit below this line
module.exports = fibonacci;
