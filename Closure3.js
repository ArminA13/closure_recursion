// Implement a simple person object with private properties using closures.

function createPerson (name, age) {
    let person = {
        getName() {
            return name;
        },
        getAge() {
            return  age;
        },
        setName(valeu) {
            return name = valeu;
        },
        setAge(valeu) {
            return age = valeu;
        }
    }
    return person
}



const person = createPerson("Alice", 30); 
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30 
person.setName("Bob"); 
person.setAge(25); 
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25