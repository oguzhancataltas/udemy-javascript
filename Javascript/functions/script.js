// Fonksiyonlar (functions)

function hello() {
    console.log("Hello World!");
}

function space(){
    console.log("");
}

hello();
hello();
hello();

space();

function hiUser(name, age) {
    console.log(`İsim : ${name}\nYaş : ${age}`);
}

hiUser();
hiUser("Oğuzhan", 29);
hiUser("Levent", 37);

space();

function calcAge(birthday) {
    return 2023 - birthday;
}

function write(name) {
    console.log(name);
}

console.log(calcAge(1994));

space();

let ageSamet = calcAge(1990);
let ageMehmet = calcAge(2000);
let ageCagla = calcAge(2005);

write(ageSamet);
write(ageMehmet);
write(ageCagla);

function ehliyet(birthday, name) {
    let age = calcAge(birthday);
    if (age >= 18) {
        console.log(name + " Ehliyet Alabilir!");
    } else {
        console.log(name + " Ehliyet Alamaz!!!");
    }
}

ehliyet(1990, "Esra");
ehliyet(2010, "Ahmet");








