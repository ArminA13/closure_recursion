// Write a recursive function to generate the nth number in the Fibonacci sequence.

function fibonacci(num) {
    if (num <= 2) {
        return num - 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(3)); // Output: 13
