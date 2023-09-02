// DATE OBJECT

let zaman = new Date();
let birthday = new Date(1994, 2, 18);

// Get Metods

console.log(zaman.getMilliseconds());
console.log(zaman.getSeconds());
console.log(zaman.getMinutes());
console.log(zaman.getHours());
console.log(zaman.getDay());
console.log(zaman.getDate());
console.log(zaman.getMonth());
console.log(zaman.getFullYear());

//Set Methods

// zaman.setDate(25);
// zaman.setMonth(2);
//zaman.setFullYear(2024);



console.log(zaman.getFullYear() - birthday.getFullYear());

console.log(zaman);
console.log(typeof zaman);
