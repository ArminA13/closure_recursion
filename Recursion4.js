// Write a recursive function to calculate the sum of an array of numbers.

function arraySum(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    } else {
        return arr[index] + arraySum(arr, index + 1);
    }
}

console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15
