const removeFromArray = function(arr, ...otherArgs) {

    return arr.filter(value => !otherArgs.includes(value));

};

// Do not edit below this line
module.exports = removeFromArray;
