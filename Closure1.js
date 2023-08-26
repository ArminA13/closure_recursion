//Create a counter function using closure that increments a count every time it's called

// const counter = createCounter(); 
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2


function createCounter () {
    let count = 0;
    function counter () {
        return ++count;
    }
    return counter;
}

const counter = createCounter(); 
console.log(counter());
console.log(counter());