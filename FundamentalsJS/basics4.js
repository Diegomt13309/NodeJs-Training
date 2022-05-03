//block of code

function addTwoNumbers(a,b){
    return a+b;
}

let total = addTwoNumbers(2,3);
console.log(total);

//Anonymous functions, does not have name
let sumOfIntegers = function(c,d){
    return c+d;
}

let sumOfNumbers = (c,d)=>c+d;

console.log(sumOfNumbers(10,3));
