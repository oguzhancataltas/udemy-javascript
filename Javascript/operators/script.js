// OPERATÖRLER

let veri;
const a = 20;
const b = 10;
let c = 3;
let d = 3;

// 1. Aritmetik Operatörler 

veri = a + b;
veri = a - b;
veri = a * b;
veri = a / b;
veri = a % b;
veri = c++;
veri = ++d;

// 2. Atama Operatörleri

veri = a;
veri += a; // veri = veri + a;
veri -= a; // veri = veri - a;
veri *= a; // veri = veri * a;
veri /= a; // veri = veri / a;
veri %= a; // veri = veri % a;

// 3. Karşılaştırma Operatörleri

veri = a == b;
veri = c == d;
veri = 5 === "5"; //Türleri Farklı Olduğu için
veri = a != b;
veri = c != d;
veri = c !== d;
veri = a > b;
veri = a < b;
veri = a >= b;
veri = a <= b;

// 4. Mantıksal Operatörler

// && (and)

veri = (a > b) && (a > c);

// || (or)

veri = (b > b) || (a > c);

// ! (not)

veri = !(a < b);

console.log(veri);
console.log(typeof veri);
