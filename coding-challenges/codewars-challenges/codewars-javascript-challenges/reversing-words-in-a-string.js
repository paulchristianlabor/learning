// Reversing Words in a String

/*

Instruction:

You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

Happy coding!

*/

// Code

/*

function reverse(string){
  //your code here
}

*/

// My Code Starts Here

function reverse(string) {
    //your code here
    return string.split(" ").reverse().join(" ");
}

reverse("Hello World To The Moon and Back");