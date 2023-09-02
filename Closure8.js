// Implement a memoization function using closure to cache expensive function calls.

function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoize(fn) {
    const cache = {};
    return (...n) => {
        if (cache[n]) {
            return cache[n];
        }
        let result = fn.apply(this, n);
        cache[n] = result;
        return result;
    };
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)
