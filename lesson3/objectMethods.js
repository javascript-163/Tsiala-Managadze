let children = ["George", "Lia","Anna"];
console.log(children[0])
children.push("Demetre")
// children.pop()

let childrenFromSecond = children.slice(1, 3);
// console.log(childrenFromSecond);


let spliceData = children.splice(2, 2,)
console.log(spliceData)

console.log(children)

let fruits = ["apple", "bannana", "grape", "cheery"];
fruits.splice(2,0, "lemon", "plamp", "kiwi");
console.log(fruits);

// .......objects..................

let person = { 
    firstName: "Nike",
    lastName: "jiqia",
    children: ["qeti", "Tako","DEmetre"]
};
let students = [
    {
        firstName: "George",
        lastName: "lomidze",
        jobs: [
            {
                name: "product owner",
                company: "Abc"
            },
            {
                name: "product manager",
                company: "Def"
            }
        ]
    },
    {
        firstName: "Givi",
        lastName: "bagishvili",
        jobs: [
            {
                name: "product owner",
                company: "Kli"
            },
            {
                name: "product manager",
                company: "Mno"
            }
        ]
    }
]
console.log(students[0].jobs[0].name);

