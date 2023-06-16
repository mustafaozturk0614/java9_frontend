/**
 * user nesnesi olusturacagız json obje
 *
 * içinde
 * name ,surname username,age,password
 * interests==> 1den fazla ilgi alanı olabilir
 * expanses ==> 1den fazla harcama miktari olabilir
 * address==> isiminde bir nese
 *  adresin içindede  country ve city olsun
 */

let user = {
  name: "Mustafa",
  surName: "Ozturk",
  username: "musty",
  age: 35,
  password: "123",
  interests: ["Müzik", "Dans", "Sinema"],
  expenses: [100, 250, 96, 124],
  address: {
    country: "Turkiye",
    city: "Ankara",
  },
};

console.log(user);
console.log(user.username);
console.log(user.address.city);

// fonksiyon yazımı
function sayHello(isim) {
  console.log("merhaba " + isim);
}

sayHello("Mustafa");

let sayHello2 = function (isim) {
  return "merhaba " + (isim + "").charAt(0);
};
sayHello2("Ezgi");
let sayHello3 = (isim) => console.log("merhaba " + isim);

console.log(sayHello2("Mert"));

//1- harcamaların toplamını heasplayaıp bize donen fonksiyonu yazalım

function toplamHarcama() {
  let toplam = 0;
  let harcamaDizi = user.expenses;
  for (const i in harcamaDizi) {
    toplam += harcamaDizi[i];
  }
  return toplam;
}

console.log("toplam harcama= " + toplamHarcama());

function toplamHarcama2() {
  let toplam = user.expenses.reduce((x, y) => x + y);
  return toplam;
}

console.log("toplam harcama2= " + toplamHarcama2());

function toplamHarcama3(harcamaListesi) {
  let toplam = harcamaListesi.reduce((x, y) => x + y);
  return toplam;
}
console.log("toplam harcama3= " + toplamHarcama3(user.expenses));

// son iki expanses donen bir metot yazalım

function sonIkiHarcama() {
  return user.expenses.slice(user.expenses.length - 2);
}

console.log(sonIkiHarcama());
console.log(user.expenses);

let sonIkiHarcama2 = () => {
  return user.expenses.slice(-2);
};
console.log(sonIkiHarcama2());
let sonIkiHarcama3 = () => {
  return user.expenses.reverse().slice(0, 2);
};
console.log(sonIkiHarcama3().reverse());

function ilgiAlaniEkle(index, ilgiAlani1, ilgiAlani2) {
  user.interests.splice(index, 0, ilgiAlani1, ilgiAlani2);
}

ilgiAlaniEkle(1, "Tiyatro", "Gezi");
console.log(user.interests);

user.interests.splice(2, 2, "Yeni", "xxx", "a", "b");
console.log(user.interests);

console.log("Mustafa".replaceAll("a", "e"));
