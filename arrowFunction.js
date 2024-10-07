//Task 1: Rewriting the function as an arrow function
const greet = name => {
    return `Hello, ${name}`;
};

//Task 2: Arrow function that takes the sum of two numbers
const sum = (a,b) => {
    return a+b;
};

//Task 3: Arrow function that squares a number
const square = (n) => {
    return n*n;
};

//Spicy Task: Arrow function that takes an array of numbers and returns a new array with squared numbers.
const squareArray = (array) => {
    let arr = [];
    for(let i of array) {
        arr.push(i*i);
    }
    return arr;
};  



console.log(greet("Abdullah"))
console.log(sum(3,5));
console.log(square(4));
let testArray = [1 ,2 ,3 ,4 ,5];
console.log(squareArray(testArray));