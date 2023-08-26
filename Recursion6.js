// Write a recursive function to perform a binary search on a sorted array.

function binarySearch(arr, value) {
    if (!arr.length) {
        return -1;
    }

    let average = arr.length - 1;

    if (value === arr[average]) {
        return average;
    }

    if (value > arr[average]) {
        return binarySearch(arr.slice(average + 1), value);
    }

    if (value < arr[average]) {
        return binarySearch(arr.slice(0, average), value);
    }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 9)); // Output: 4 
console.log(binarySearch(sortedArray, 10)); // Output: -1
