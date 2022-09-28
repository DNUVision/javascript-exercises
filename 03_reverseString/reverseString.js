const reverseString = function(string) {
    // initializing empty array and empty string
    let mediumArr = []; 
    let reverseString = "";

    //looping over the string paramter and pushing its letters to the array
    for(let i = 0; i < string.length; i++){
        mediumArr.push(string[i]);
    }

    //reversing the array's order
    mediumArr = mediumArr.reverse();

    //looping over the array and assigning its items to the empty string and returning it
    for(let item = 0; item < mediumArr.length; item++){
        reverseString += mediumArr[item];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
