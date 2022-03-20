// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(arr){
    let reverseArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i])
    }
    return reverseArr
}

function reverseArrayInPlace(arr){
    for(let i = 0; i < (arr.length / 2); i++){
        let orig = arr[i];                         // orig = 1, orig = 2, orig = 3
        arr[i] = arr[arr.length - 1 - i];          // arr[0] = 5, arr[1] = 4, arr[2] = 3
        arr[arr.length - 1 - i] = orig;            // arr[4] = 1; arr[3] = 2, arr[2] = 3 
    }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]