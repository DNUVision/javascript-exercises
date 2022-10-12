const removeFromArray = function(arr, ...item) {
    console.log('this is item provided ' + item);
    for(let i = 0; i < item.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === item[i]){
                arr.splice(j,1);
            }
        }
        }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
