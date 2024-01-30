// // // dav1
// let action = "move";

//  switch(action) {
//     case "move":
//         alert("You're moving!");
//         break;
//     case "jump":
//         alert("You're jumping!");
//         break;
//     case "run":
//         alert("You're running!");
//         break;
//     default:
//         alert("Invalid action.");
    
//  }

// //  dav2

//     let vegetables = Carrot;

// switch(vegetables) {
//     case "Carrot":
//         alert("Hello")
//         break;
//     case "Broccoli":
//          alert("Welcome")
//         break;
//     default:
//         alert("Neither");

// }


// // dav3

// let userAge = prompt("შეიყვანეთ ასაკი");

// if (userAge < 18) {
//   document.write("თქვენ არ შეგიძლიათ ხმის მიცემა");
// } else {
//   document.write("თქვენ შეგიძლიათ ხმის მიცემა");
// }

// // dav4
// // შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// // 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// // 2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
// // 3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
// // 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// // 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.



// function checkPasswordStrength(password) {
//     if (password.length < 3) {
//         return "პაროლი არასწორია. პაროლი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან.";
//     } else if (password.length >= 3 && password.length < 6) {
//         return "სუსტი პაროლი.პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან.";
//     } else if (password.length >= 6 && password.length < 8) {
//         return "საშუალო პაროლი. პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან.";
//     } else if (password.length >= 8 && password.length <= 16) {
//         return "ძლიერი პაროლი. პაროლი უნდა შედგებოდეს მაქსიმუმ 16 სიმბოლოსგან.";
//     } else if (/^\d+$/.test(password)) {
//         return "არასწორი პაროლი. პაროლი არ უნდა შედგებოდეს მხოლოდ ციფრებისგან.";
//     } else {
//         return "ძლიერი პაროლი. პაროლი უნდა შედგებოდეს მაქსიმუმ 16 სიმბოლოსგან.";
//     }
// }


// console.log(checkPasswordStrength("12")); 
// console.log(checkPasswordStrength("12345")); 
// console.log(checkPasswordStrength("1234567")); 
// console.log(checkPasswordStrength("123456789012345")); 
// console.log(checkPasswordStrength("123456")); 
// console.log(checkPasswordStrength("abc123")); 


// dav5
// შექმენით Quiz-ის პროგრამა შემდეგი პირობების გათვალისწინებით:
// საჭიროა გქონდეთ მინიმუმ 5 სხვადასხვა შეკითხვა.
// ჩაშენებული პირობითი ოპერატორების მეშვეობით გააკეთეთ ისე, რომ მომხმარებელს შეეძლოს თითოეული ამ შეკითხვიდან მომდევნო შეკითხვაზე გადასვლა, მხოლოდ იმ შემთხვევაში თუ წინა შეკითხვას სწორად უპასუხებს.
// მაგ. თუ მომხმარებელი გასცემს სწორად პასუხს პირველ შეკითხვას, მხოლოდ ამ შემთხვევაში უნდა მოხდეს მისი მეორე შეკითხვაზე გადაყვა\ნა იგივე დანარჩენ შეკითხვებზეც.


// შეკითხვის დასასმელად გამოიყენეთ prompt()-ბრძანება საიდანაც მიიღებთ მომხმარებლის არჩევანს ხოლო პასუხი კი გამოიტანეთ alert() ბრძანების მეშვეობით.

// საბოლოო ჯამში დაითვალეთ თუ რამდენ შეკითხვას გასცა მომხმარებელმა პასუხი სწორად და გამოიტანეთ ეკრანზე.


let score = 0;

function askQuestion1() {
    const userAnswer = prompt("რომელია საქართველოს დედაქალაქი?");
    if (userAnswer === "თბილისი") {
        score++;
        alert("სწორია!");
        askQuestion2();
    } else {
        alert("არ არის სწორი. კიდევ სცადე!");
        askQuestion1();
    }
}

function askQuestion2() {
    const userAnswer = prompt("რამდენი დღეა კვირაში?");
    if (userAnswer === "7") {
        score++;
        alert("სწორია!");
        askQuestion3();
    } else {
        alert("არ არის სწორი. კიდევ სცადე!");
        askQuestion2();
    }
}

function askQuestion3() {
    const userAnswer = prompt("ვინ არის Microsoft-ის დამფუძნებელი?");
    if (userAnswer === "ბილ გეითსი") {
        score++;
        alert("სწორია!");
        askQuestion4();
    } else {
        alert("არ არის სწორი. კიდევ სცადე!");
        askQuestion3();
    }
}

function askQuestion4() {
    const userAnswer = prompt("რა არის ყველაზე დიდი ოკეანე დედამიწაზე?");
    if (userAnswer === "წყნარი ოკეანე") {
        score++;
        alert("სწორია!");
        showScore();
    } else {
        alert("არ არის სწორი. კიდევ სცადე!");
        askQuestion4();
    }
}

function showScore() {
    alert("თქვენ სწორად უპასუხეთ " + score + " შეკითხვას 4 შეკითხვიდან.");
}

askQuestion1();



