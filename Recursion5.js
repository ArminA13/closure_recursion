// Write a recursive function to check if a given string is a palindrome.

function isPalindrome(word) {
    if (word.length <= 1) {
        return true;
    } else {
        if (word[0] === word[word.length - 1]) {
            return isPalindrome(word.slice(1, -1));
        } else {
            return false;
        }
    }
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("")); // Output: false
