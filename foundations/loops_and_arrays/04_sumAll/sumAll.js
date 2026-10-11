const sumAll = function(a, b) {
    //Anyting other than possible integers should return 'ERROR'
    if(typeof a != "number" || typeof b != "number") return 'ERROR';
    if( a < 0 || b < 0) return 'ERROR';
    if( a != Math.floor(a) || b != Math.floor(b)) return 'ERROR';

    //need to start at smaller index and end at larger

    let small = a;
    let large = b;
    let sum = 0;


    if (b < a){
        small = b;
        large = a;
    }

    for(let i = small; i <= large; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
