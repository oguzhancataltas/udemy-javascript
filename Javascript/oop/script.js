// Nesne Tabanlı Programlama

// Constructor
// let kaan = {
//     name:"kaan",
//     yearOfBirth: 2008,
//     job: "Student"
// }

// val = kaan;
// console.log(val);
// console.log(typeof val);

// function Student(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     console.log(this);
//     console.log(typeof this);
//     this.calculateAge = function() {
//         return (2023 - this.yearOfBirth);
//     }
// }

// let Student = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// } 

// let kaan = new Student("kaan", 2008, "student");
// let aylin = new Student("aylin", 2000, "student");

// console.log(kaan.name);
// console.log(aylin.yearOfBirth);
// console.log(kaan.name + " yaş : " + kaan.calculateAge());
// console.log(aylin.name + " yaş : " + aylin.calculateAge());


// Prototype -> Inheritance

// let Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     return 2023 - this.yearOfBirth;
// }

// Person.prototype.getName = function() {
//     return this.name;
// }

// let aylin = new Person("aylin", 2000, "teacher");
// let kaan = new Person("kaan", 2004, "student");


// console.log(aylin);
// console.log(typeof aylin);
// console.log(aylin.calculateAge());
// console.log(aylin.getName());

// console.log("-----------------------");

// console.log(kaan);
// console.log(typeof kaan);
// console.log(kaan.calculateAge());
// console.log(kaan.getName());


// object.create

// let personProto = {
//     calculateAge: function() {
//         return 2023 - this.yearOfBirth;
//     }
// }

// let kaan = Object.create(personProto);

// kaan.name = "kaan";
// kaan.yearOfBirth = 2008;
// kaan.job = "student";

// let aylin = Object.create(personProto, {
//     name: {value : "aylin"},
//     yearOfBirth: {value : 2000},
//     job: {value : "teacher"},
// });

// console.log(kaan);
// console.log(kaan.calculateAge());

// console.log(aylin);
// console.log(aylin.calculateAge());


// Prototype Kalıtım

// let Person = function(name, yearOfBirth, job) {
//     this.name = name,
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     return 2023 - this.yearOfBirth;
// }

// let Teacher = function(name, yearOfBirth, job, subject){
//     Person.call(this, name, yearOfBirth, job);
//     this.subject = subject;
// }

// // inherit the Person prototype methods
// Teacher.prototype = Object.create(Person.prototype);

// console.log(Teacher.prototype.constructor);

// // set Teacher constructor
// Teacher.prototype.constructor = Teacher;
// console.log(Teacher.prototype.constructor);


// let aylin = new Teacher("aylin", 1998, "teacher", "english");

// console.log(aylin);
// console.log(aylin.calculateAge());


// Immediate function

function welcome() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();
    var msg = "Welcome. Today is " + days[today.getDay()];
    return msg;
}

console.log(welcome());

// (function() {

// })();

(function(name) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();
    var msg = 'Welcome ' + name + '. Today is ' + days[today.getDay()];
    console.log(msg);
}("Oğuzhan"));