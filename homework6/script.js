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