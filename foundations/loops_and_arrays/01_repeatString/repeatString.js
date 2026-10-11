const repeatString = function(str, num) {
    // check if num is neg -> 'ERROR'
    if(num < 0) return 'ERROR';

    //initiatialize empty string (accum) to start
    let ans = "";

    for(let i = 0; i < num; i++){
        ans += str;
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
