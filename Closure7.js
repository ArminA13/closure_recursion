// Write a function that caches the duplication of result of a calculation using closure.

function createCachingFunction() {
    const cachedValues = {};
    return function (number) {
        if (number in cachedValues) {
            return `${cachedValues[number]} (cached)`;
        }
        cachedValues[number] = number * 2;

        return `${cachedValues[number]} (calculated)`;
    };
}

const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(5)); // Output: 10 (calculated)
console.log(cachedCalculation(5)); // Output: 10 (cached)
