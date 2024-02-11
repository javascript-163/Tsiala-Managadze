function calculator(num1, num2, operator) {
    let result;
switch(operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero is prohibited!";
        };
        break;
    default:
        result = "Error: Invalid operator was provided!";
}

return result;
};

console.log(calculator(3,1,"/"));