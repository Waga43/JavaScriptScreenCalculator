// Javascript Calculator
alert("This is a JavaScript Calculator")
// prompt("What is your name?")

// Ask for the first operand
var number1 = parseFloat(prompt("Please key in the first number of your choice.", "e.g.123456789"));

alert("You chose: " + number1);

// Ask for the operator input to perform: add, subtract, divide or multiply
const operator = prompt('Enter operator ( either +, -, * or / ): ');
alert("Your operation is: " + number1 + operator);

// Ask for the second operand
var number2 = parseFloat(prompt("Please key in the second number of your choice.", "e.g.123456789"));
alert("Your operation is: " + number1 + operator + number2);
let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);

alert("The result of your operation: \n"
+ number1 + operator + number2 + "=" +
result);

