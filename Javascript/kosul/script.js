// Koşullu Durumlar If - Else

// const id = "234234234";
// const firstName = "Çağla";
// const userName = "caglayilmaz";
// const age = 20;
// const isStudent = true;
// const school = "University";

// if (userName == "caglayilmaz") {
//     console.log("Merhaba " + firstName);
// } else {
//     console.log("Kullanıcı Bulunamadı!!!");
// }

// if (age === 20) {
//     console.log("Yaşınız : " + age);
// }

// if (isStudent){
//     console.log("Hangi Bölümde Okuyorsun :");
// } else {
//     console.log("Hangi Mesleği Yapıyorsunuz : ");
// }

// if (age >= 18) {
//     if (school === "university") {
//         console.log("Ehliyet Alabilirsiniz.");
//     } else {
//         console.log("Eğitim Durumuzudan Dolayı Ehliyet Alamazsınız!!!");
//     }
// } else {
//     console.log ("Yaşınız Küçük Olduğu için Ehliyet Alamazsınız!!!");
// }

// if (typeof id != "undefined") {
//     console.log("id : " + id);
// }else {
//     console.log("No id !!!");
// }

// Koşullu Durumlar Switch

// let islem = 4;

// switch (islem) {
//     case 1:
//         console.log("1. Nolu işlem yapıldı.");
//         break;
//     case 2:
//         console.log("2. Nolu işlem yapıldı.");
//         break;
//     case 3:
//         console.log("3. Nolu işlem yapıldı.");
//         break;
//     default:
//         console.log("Tanımsız İşlem!!!");
//         break;
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = "Pazar";
//         break;
//         case 1:
//         day = "Pazartesi";
//         break;
//         case 2:
//         day = "Salı";
//         break;
//         case 3:
//         day = "Çarşamba";
//         break;
//         case 4:
//         day = "Perşembe";
//         break;
//         case 5:
//         day = "Cuma";
//         break;
//         case 6:
//         day = "Cumartesi";
//         break;
// }

// console.log("Bugün Günlerden " + day);

// let hour = new Date();

// switch (true) {
//     case (hour.getHours() >= 6 && hour.getHours() <= 12):
//         console.log("Günaydın!");
//         break;
//     case (hour.getHours() >= 13 && hour.getHours() <= 17):
//         console.log("Tünaydın!");
//         break;
//     case (hour.getHours() >= 18 && hour.getHours() <= 23):
//         console.log("İyi Akşamlar!");
//         break;
//     case (hour.getHours() <= 6):
//         console.log("İyi Geceler!");
//         break;
//     default:
//         console.log("Geçersiz Saat");
// }

// Object Literals

// let oguzhan = ["Oğuzhan", "Çataltaş", 29];
// let levent = ["Levent", "Ertunalılar", 37];

let user = {
    userName : "levent",
    firstName : "Levent",
    lastName : "Ertunalılar",
    age : 37,
    hobbies : ["Spor", "Kitap Okumak", "Yazılım"],
    address : {
        city : "İstanbul",
        country : "Türkiye",
        phone : "0500000000",
    }
}

console.log(user);
console.log(typeof user);

console.log(user.userName);
console.log(typeof user.userName);

console.log(user.firstName);
console.log(typeof user.firstName);

console.log(user.lastName);
console.log(typeof user.lastName);

console.log(user.age);
console.log(typeof user.age);

console.log(user.hobbies);
console.log(typeof user.hobbies);

console.log(user.address);
console.log(typeof user.address);

console.log(user.address.city);
console.log(typeof user.address.city);

console.log(user.address.country);
console.log(typeof user.address.country);

console.log(user.address.phone);
console.log(typeof user.address.phone);


