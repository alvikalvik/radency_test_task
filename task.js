'use strict';

let getCombinations = (function () {
    let res = null;
    function combinations(arr, k, start, idx, current) {
        if (idx === k) {
            res.push([...current]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            current[idx] = arr[i];
            combinations(arr, k, i + 1, idx + 1, current);
        }
    }

    return function (arr, k) {
        res = [];
        combinations(arr, k, 0, 0, []);
        const temp = res;
        res = null;
        return temp;
    };
}());


// Check of getComginations work
// const array = ['a', 'b', 'c', 'd']; // n = array.length = 4
// const k = 3;

// const combinations = getComginations(array, k);
// console.log({
//     // C^k_n = n! / (!k * (n - k)!)
//     expexted: (4 * 3 * 2 * 1)/ ((3 * 2 * 1) * (1)),
//     length: combinations.length,
//     combinations,
// });

const chooseBestDistance = (t, k, ls) => {
    const combinations = getCombinations(ls, k);

    const distancesSumsArr = combinations.map( item => {
        return item.reduce( (accum, distance) => {
            return accum + distance;
        }, 0);
    });
    
    const sortedDistancesSumsArr = distancesSumsArr.sort( (a, b) => b - a);    
    
    for (let i = 0; i < sortedDistancesSumsArr.length; i++) {
        if (sortedDistancesSumsArr[i] < t) {
            return sortedDistancesSumsArr[i];
        }        
    }
    
    return null;
}

console.log(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseBestDistance(163, 3, [50])); // null
