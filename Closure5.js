// Create a function factory that generates functions for different operations.

function createCalculator(key) {
    if (key === "add") {
        return function add(a, b) {
            return a + b;
        };
    } else if(key === "multiply" ) {
        return function multiply(a, b) {
            return a * b;
        };
    }else {
        return "Operation is not defined";
    }
}

const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8

const multiply = createCalculator("multiply");
console.log(multiply(2, 4)); // Output: 8
