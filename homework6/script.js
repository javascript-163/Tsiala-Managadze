// 1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

function findLongestWord(str) 
{ let words = str.split(" ");
let LongestWord = "";
for (let i = 0; i < words.length; i++){
    if (words[i].length > LongestWord.length) {
        LongestWord = words[i];
    }
}

return LongestWord;
}
let sentence = "ეს წინადადება შედგება რამდენიმე სიტყვისაგან, ჩვენ შევეცდებით ვიპოვოთ ყველაზე გრძელი სიტყვა";
let longest = findLongestWord(sentence);
console.log("ყველაზე გრძელი სიტყვაა : " + longest);


// 2. შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.

 let calculator = {
     num1: 0,
     nom2: 0,
     setNumbers: function(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
     },
     add: function() {
        return this.num1 + this.num2;
     },
     subtract: function() {
        return this.num1 - this.num2;
     },
     multiply: function() {
        return this.num1 * this.num2;
     },
     divide: function() {
        return this.num1 / this.num2;
     }

};
calculator.setNumbers(10, 5);
console.log("jami", calculator.add());
console.log("sxvaoba", calculator.subtract());
console.log("namravli", calculator.multiply());
console.log("ganayofi", calculator.divide());

console.log("namravli", multiply(5, 3));



// 3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

console.log("namravli:", multiply(6, 3));

function multiply(a, b) {
   return a * b;
}

//  ამ მაგალითით multiply ფუნქციას ვიძახებთ ფაქტიურად მის კოდში გამოცხადებამდე. ჰოისტინგის მეშვეობით გამოცხდებული ფუნქცია ინაცვლებს ზემოთ და გამოცხადების დროს multiply უკვე შესრულებულია და ხელმისაწვდომი






