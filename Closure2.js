//Implement a function that returns an object with methods to get and set a private variable.

function privateVariable (num) {
    let _privateNum = num;

    return {
        get() {
            return _privateNum
        },
        set(valeu) {
            return _privateNum = valeu 
        }
    }
}


const secretValue = privateVariable(42); 
console.log(secretValue.get()); // Output: 42 
secretValue.set(100); 
console.log(secretValue.get()); // Output: 100

