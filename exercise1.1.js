// Exercise 1.1: SyntaxError
const addNumbers = (x, y => {
    console.log(x + y);
}

addNumbers(5,2)
// The console.log should be: 7

// What is the error type?
// Can you identify the line number?
// What is the nature of the issue?