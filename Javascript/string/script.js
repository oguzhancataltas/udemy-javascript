//STRINGS

const firstName = "Oğuzhan";
const lastName = "Çataltaş";
const age = "29";
let hobbies = "Fizik Astronomi Film Yazılım";

let veri;

// String Birleştirme

veri = firstName + " " + lastName;
veri = "Oğuzhan";
veri += " Çataltaş";

veri = 'Benim adım ' + firstName + ' ' + lastName + ' yaşım:' + age + ' ve Ankara\' da yaşıyorum.';

veri = firstName.concat(' ', lastName);

veri = veri.toUpperCase();
veri = veri.toLowerCase();

// veri = veri.substring(3,7);
// veri = veri.slice(1,7);

// veri = veri.indexOf("t");

// veri = veri.replace('oğuzhan','Okan');

// veri = veri.length;

veri = hobbies.split(' ');



console.log(veri);
console.log(typeof veri);