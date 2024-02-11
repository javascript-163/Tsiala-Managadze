let isSunny = true;
let weatherMessage = isSunny ? "Great I can go outside!": "I think I should stay in home today!";

console.log(weatherMessage);

// igivea if else

if (isSunny) {
    console.log("Great I can go outside!");
} else {
    console.log("I think I should stay in home today!");
}

// let weatherOutside = "clear";

// if (weatherOutside === "rainy") {
//     console.log("I should carry an umbrella!");
// } else {
//     if (weatherOutside === "clear") {
//         console.log("I can go out freely!");
//     } else {
//         if (weatherOutside === "cloudy") {
//             console.log("It might rain soon!");
//         }
//     }
// };

let weatherChecker = weatherOutside === "rainy" ? "I should carry an umbrella!": weatherOutside === "clear" ? "I can go out freely!": weatherOutside === "cloudy" ? "It might rain soon!": "I don't have info about such weather!";

console.log(weatherChecker);