// Write a recursive function to calculate the factorial of a given positive integer.

function factorial(num) {
    if (num <= 2) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // Output: 120
