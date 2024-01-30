// // dav1
let action = "move";

 switch(action) {
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("Invalid action.");
    
 }

//  dav2

    let vegetables = Carrot;

switch(vegetables) {
    case "Carrot":
        alert("Hello")
        break;
    case "Broccoli":
         alert("Welcome")
        break;
    default:
        alert("Neither");

}


// dav3

let userAge = prompt("შეიყვანეთ ასაკი");

if (userAge < 18) {
  document.write("თქვენ არ შეგიძლიათ ხმის მიცემა");
} else {
  document.write("თქვენ შეგიძლიათ ხმის მიცემა");
}

// dav4
// შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// 2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
// 3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
// 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.



function checkPasswordStrength(password) {
    if (password.length < 3) {
        return "პაროლი არასწორია. პაროლი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან.";
    } else if (password.length >= 3 && password.length < 6) {
        return "სუსტი პაროლი.პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან.";
    } else if (password.length >= 6 && password.length < 8) {
        return "საშუალო პაროლი. პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან.";
    } else if (password.length >= 8 && password.length <= 16) {
        return "ძლიერი პაროლი. პაროლი უნდა შედგებოდეს მაქსიმუმ 16 სიმბოლოსგან.";
    } else if (/^\d+$/.test(password)) {
        return "არასწორი პაროლი. პაროლი არ უნდა შედგებოდეს მხოლოდ ციფრებისგან.";
    } else {
        return "ძლიერი პაროლი. პაროლი უნდა შედგებოდეს მაქსიმუმ 16 სიმბოლოსგან.";
    }
}


console.log(checkPasswordStrength("12")); 
console.log(checkPasswordStrength("12345")); 
console.log(checkPasswordStrength("1234567")); 
console.log(checkPasswordStrength("123456789012345")); 
console.log(checkPasswordStrength("123456")); 
console.log(checkPasswordStrength("abc123")); 


// dav5