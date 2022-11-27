c = prompt('📟 Enter operator ( either +, -, * or / ): ');
var a = parseFloat(prompt('📟 Enter first number: '));
var b = parseFloat(prompt('📟 Enter second number: '));

let result;

if (c == '+') {
    result = a + b;
}
else if (c == '-') {
    result = a - b;
}
else if (c == '*') {
    result = a * b;
}
else {
    result = a / b;
}

console.log(`${a} ${c} ${b} = ${result}`);
prompt(`🧾 Your answer is ${result}`);
console.log(`Thanks for using simple calculator \n Made by Gameking5678 `);
