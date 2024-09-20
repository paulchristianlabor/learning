// Reverse words

/*

Instruction:

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

// Code

/*

function reverseWords(str) {
  // Go for it
}

*/

// My Code Starts Here

function reverseWords(str) {
    // Go for it
    var reverse = str
    reverse = reverse.split(" ").reverse().join(" ");
    var reverseAgain = reverse
    return reverseAgain.split("").reverse().join("")
}
reverseWords("The quick brown fox jumps over the lazy dog")