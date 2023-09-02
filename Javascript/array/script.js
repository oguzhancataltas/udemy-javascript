// Arrays

let names = ["Oğuzhan", "Okan", "İbrahim", "Ulucan"];
let years = [2023, 1994, 1995, 1997, 1996, 1999, 2020, 2021, 2023];
let mix = ["Fatih Ahmet", "Yılmaz", 1996, null, undefined, ["Programlama", "Spor"]];

console.log(names);
console.log(names.length);
console.log(typeof names);
console.log(years);
console.log(mix);

// Get array item

console.log(names[1]);
console.log(mix[5]);

// Set array item

names[0] = "Kaan";
console.log(names);

names[4] = "Oğuzhan";
console.log(names);
names[names.length] = "Refik";
console.log(names);

// array add
names.push("Hasan"); // Array'in sonuna ekler
console.log(names);

names.unshift("Melih"); // Array'in başına ekler 
console.log(names);

// array remove
// years.pop(); // Arrayin sonundaki değeri siler
// console.log(years);

years.shift();  // Arrayin başındaki değeri siler
console.log(years);

// indexOf

let index = names.indexOf("Refik"); // Array'deki index numarasını verir.
console.log("Index : " + index);

names.reverse(); // Array'in elemanlarını sondan başlayarak sıralar.
console.log(names);

years.sort(); // Küçükten büyüğe göre sıralar.
names.sort();
console.log(years);
console.log(names);

let veri = names.concat(years);
console.log(veri);

names.splice(2, 0, "Burak"); // Silmeden istenilen index'e yeni eleman eklenir ve ondan sonraki elemanlar kaydırılır.
console.log(names);

names.splice(2, 1, "Umut"); // İstenilen index'deki değer silinir ve yeni değer eklenir.
console.log(names);





