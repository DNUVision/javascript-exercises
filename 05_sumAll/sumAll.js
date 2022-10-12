const sumAll = function(num1, num2) {
    let iter;
    let iterable;
    let sum = 0;
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR";
    }else if(0 > num1 || 0 > num2){
        return "ERROR";
    }else{
        if(num1 > num2){
            iter = num2;
            iterable = num1;
        }else{
            iter = num1;
            iterable = num2;
        }
    }
    
    for(let i = iter; i <= iterable; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
