let musicNote = ["do", "re", "mi", "fa","sol", "la", "si"];

// DAV-1
console.log(Array.isArray(musicNote));

// DAV-2
let firstNote = musicNote[0];
console.log(firstNote);

// dav-3
let lastNote = musicNote[musicNote.length-1];
console.log(lastNote);

// dav-4
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];
console.log(`1${o[1]} choice is ${color[0]}`);
console.log(`2${o[2]} choice is ${color[1]}`);
console.log(`3${o[3]} choice is ${color[2]}`);

// dav-5
let student = { 
    name: "Mate",
    surname: "Gotua"
};
// add
student.agg = 21;
student.telNumber = 595959669;
console.log(student);

// delete
delete student.telNumber;
console.log(student);
 
// replace
student.agg = 22;
console.log(student);


