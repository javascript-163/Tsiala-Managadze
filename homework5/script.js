// 1 შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 2; i < array.length; i += 3) {
    console.log(array[i]); 
}

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 2;

while (index < Array.length) {
    console.log(Array[index]);
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