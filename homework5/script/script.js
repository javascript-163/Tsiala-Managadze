// 1 შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 2; i < array.length; i += 3) {
    console.log(array[i]);
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 2;

while (index < array1.length) {
    console.log(array1[index]);
    index += 3;
}


// 2 შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let number = 10;



while (number >= 1) {
    console.log(number);
    number--;
}

//   3  მოცემული მასივიდან
//  let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
//  ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
let result = [];

for (let i = 0; i < names.length; i++) {
    if (names[i] !== 'Bob') {
        result.push(names[i]);
    }
}
console.log(result);


let Name = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

let i = 0;

while (i < Name.length) {
    if (Name[i] === 'Bob') {
        Name.splice(i, 1);
    } else {
        i++;
    }
}

console.log(Name);

// 4 ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(5, 3));



function power(base, exponent) {
    let result = 1;
    let count = 0;
    while (count < exponent) {
        result *= base;
        count++;
    }
    return result;
}
console.log(power(5, 3));

// 5  შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
// მაგ. 
// 1
//  2
// 3 Fizz
// 4
// 5 Buzz
// 6 Fizz
// 7
// 8
// 9 Fizz
// 10 Buzz
// 11
// 12 Fizz
// 13
// 14
// 15 FizzBuzz
// … 100-მდე.


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz();

// 7 შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J(დიდი ასობგერით უნდა ეწეროს.

function capitalizeFirstLetter(str) {
return str.charAt(0).toUpperCase() +str.slice(1);

}
let inputString = "javascript"; 
let capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString);


// 8  შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

function BlankStringChecker(testString) {
    if (testString.trim() === " ") 
{
    return "this sting is blank";
} 
else{ return "this sring is not blank";
}
}
console.log(BlankStringChecker(""));
console.log(BlankStringChecker("test"));


// 9  შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function stringToArray(testString){
    return testString.split(",");
}

let testString = "Hello, World";
let arrayVersion = stringToArray(testString);
console.log(arrayVersion);