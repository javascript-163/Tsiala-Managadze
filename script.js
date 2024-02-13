let result = Math.pow (5, 2);
console.log(result);

// let result = 5 ** 2;
// console.log(result)

function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
let celsius = parseFloat(prompt("SheiyvaneT temperatura celsiusSi"));
let fahrenheit = celsiusToFahrenheit(celsius);
console.log("temperatura farinheitSi :" + fahrenheit  +"F");
