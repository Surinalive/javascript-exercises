const reverseString = function(str) {
    //create empty string(accum)
    let ans = "";

    //build answer from end to start of str
    for (let i = str.length - 1; i >=0; i--){
        ans += str[i];
    }

    if(str.length != ans.length){
        console.log("Something went wrong -> lengths don't match");
    }

    return ans;
};

// Do not edit below this line
module.exports = reverseString;
