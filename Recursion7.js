// Write a recursive function to flatten an array of nested arrays.
const result = [];

function flattenArray (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    return result
}

const nestedArray = [1, [2, [3, 4], 5], 6]; 
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]