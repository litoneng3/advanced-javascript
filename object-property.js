const student = [
    { id: 10, name: "Deepjol" },
    { id: 21, name: "Manna" },
    { id: 33, name: "Kajol" },
    { id: 45, name: "Samia" }
];

// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     output.push(element.id);  
// }
// console.log(output);

// const ids = student.map(s =>s.id);
// console.log(ids);
// const names = student.map(s => s.name);
// console.log(names);

const even = student.filter(s => s.id % 2 == 0);
// console.log(even);

const bigger = student.find(s => s.id > 30);
console.log(bigger);