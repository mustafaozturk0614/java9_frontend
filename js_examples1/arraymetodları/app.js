//console.log("app js içindeyim");

//let ,var ,const

let sayi1 = 5;
const sayi2 = 15;

sayi1 = 20;
//sayi2 = 30;

console.log(sayi1);
console.log(sayi2);

let sayilar = [1, 5, 15, 8, 9, 25];
let sayilar2 = new Array();
console.log(sayilar);
console.log(sayilar2);

for (let index = 0; index < sayilar.length; index++) {
  const element = sayilar[index];
  console.log(element);
}
console.log("2.for dongusu");
for (const key in sayilar) {
  console.log(sayilar[key]);
}

console.log("3.for dongusu");

for (const iterator of sayilar) {
  console.log(iterator);
}

// array sonuna veri ekleme
sayilar2.push(128);
sayilar2.push(356);
sayilar2.push(125);

//arrayin başına veri ekleme
sayilar2.unshift(-47); //eklenecek elemanın sola gelmesini sağlar
sayilar2.unshift(407);

// arrayin sonundan veri silme
sayilar2.pop();
sayilar2.pop();
// arrayin başından veri silme
sayilar2.shift();
sayilar2.shift();
console.log(sayilar2);

/////////////////////////
sayilar.unshift("2");

for (const sayi of sayilar) {
  console.log((Number(sayi) + 5) / 2);
}
sayilar.shift();
console.log("/////////////");
sayilar.forEach((x) => console.log(x));

// her gelen sayiya 5 ekleyerek yeni bir listede toplamak istiryorum
let sayilar3 = sayilar.map((y) => y + 5);
console.log(sayilar3);

let sayilar4 = sayilar3.filter((x) => x > 14);
console.log(sayilar4);

let id = sayilar3.find((x) => x == 20);
console.log(id);
sayilar3.push("40");
let id2 = sayilar3.find((x) => x == 40); // 40 i dondurur 2 eşittir sadece deger eşitliğine bakar
console.log(id2);
let id3 = sayilar3.find((x) => x === 40); // undefined dondurur 3 eşittir tip eşitliğinede bakar
console.log(id3);

//sayilar arrayinde herhangi bir elman 15 den buyukmudur
let sonuc = sayilar.some((x) => x > 15);
console.log(sonuc);
//sayilar arrayinde butun elemanlar 15 den buyukmudur
let sonuc2 = sayilar.every((x) => x > 15);
console.log(sonuc2);
// sıralama buyukten kucuge
console.log(sayilar.sort((a, b) => b - a));

console.log("//////////////////////////");

//Splice
//1. degerimiz basladımız index 2.deger o indexten itibaren kaç deger alınacagı belirtir
// ve o indexde ki elamları dizimizden çıkartır ve bir array olarak doner
// orjinal diziyi değiştir.
let dizi = [1, 5, 8, 78, 9];
let yeniDizi = dizi.splice(1, 2);
console.log(yeniDizi);
console.log(dizi);

// Slice
//1.degerimiz başlangıc indexi 2 degerimiz bitiş indexini temsil eder bu iki deger arasındaki verileri 2 deger dahil olmayacak sekilde bize doner yani substring metodu gibi çalışır ve orjinal dizide bir değişiklik yaratmaz
console.log("===Slice====");
let dizi2 = [1, 5, 8, 78, 9];
console.log(dizi2.slice(1, 2));
console.log(dizi2.slice(2));
console.log(dizi2);
