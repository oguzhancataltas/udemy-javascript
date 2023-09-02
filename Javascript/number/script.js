// Numbers

let veri;

// veri = Number("5");
// veri = parseInt("5");
// veri = parseFloat("5.5");
// veri = parseInt("5c");
// veri = parseInt("c5");
// veri = isNaN("c5");
// veri = isNaN("5");

var sayi = 15.56436345353634;
veri = sayi.toPrecision(5);
veri = sayi.toFixed(3);

veri = Math.PI;
veri = Math.round(3.5); // Yakın olduğu değere yuvarlar
veri = Math.round(3.2);
veri = Math.ceil(3.5); // Bir üst sayıya yuvarlar
veri = Math.floor(3.5); // Bir alt sayıya yuvarlar
veri = Math.pow(3,5); // üstünü alır
veri = Math.sqrt(49); // karekökünü alır
veri = Math.abs(-50);
veri = Math.min(1,3,4,5,6,7);
veri = Math.max(1,3,4,5,6,7);
veri = Math.random();
veri = Math.round(Math.random()*100);





console.log(veri);
console.log(typeof veri);