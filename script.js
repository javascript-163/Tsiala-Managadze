Math.pow ("2", "2");
2**2
Math.pow (2, 2);

function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
let celsius = parseFloat(prompt("SheiyvaneT temperatura celsiusSi"));
let fahrenheit = celsiusToFahrenheit(celsius);
console.log("temperatura farinheitSi :" + fahrenheit  +"F");
