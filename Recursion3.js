// Write a recursive function to calculate the value of a number raised to an exponent.

function power(num, n) {
    if (n === 1) {
        return num;
    } else {
        return num * power(num, n - 1);
    }
}

console.log(power(2, 3)); // Output: 8
