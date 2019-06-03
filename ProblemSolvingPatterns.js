/**PROBLEM SOLVING PATTERNS:
    1. Devise a plan for solving problems.
    2. Master common problem solving patterns.

 SOME PARTTERNS...
 - Frecuency Counter.
 - Multiple Pointers.
 - Sliding Window.
 - Divide and Conquer.
 - Dynamic Programming.
 - Greedy Algorithms.
 - Backtracking.
 - Many More!
*/

//FREQUENCY COUNTERS (not official name):
/**
    This pattern uses objects or sets to collect values / Frequencies of values.
    This can often avoid the need for nested loops or 0(N^2) operations with arrays / strings.

    AN EXAMPLE:
    Write a function called same, which accepts two arrays. The function should return true if every values in
    the array has it's corresponding values squared in the second array. The frecuency of values must be the same.

    same([1,2,3],[4,1,9]) //true;
    same([1,2,3], [1,9]) //false;
    same([1,2,1], [4,4,1]) // false (must be the same frecuency)
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i =0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i]**2)
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}
//As n grows the length of our arrays grows as does this and it's nested so that the quadratic relationship, Try to avoid nested loops when possible.
//Time complexity 0(N^2)
same([1,2,3,2], [9,1,4,4]);

//REFACTORED
function sameRe(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    };
    //each object is going to count the frequency of individual values in the arrays.
    //So, we will end up with, two objects at the end.
    let frequencyCounter1 = {}
    let frecuenctCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    } //Two loops is vastly better than two nested loops.
    for(let val of arr2){
        frecuenctCounter2[val] = (frecuenctCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frecuenctCounter2)){
            return false;
        }
        if(frecuenctCounter2[key**2] !== frequencyCounter1[key]){
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frecuenctCounter2)
    return true;
}
//Time complexity is O(n) better than 0(N^2)
sameRe([1,2,3,2], [9,1,4,4]);