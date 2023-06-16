let user = {
  name: "Mustafa",
  surName: "Ozturk",
  username: "musty",
  age: 35,
  password: "123",
  interests: ["Müzik", "Dans", "Sinema"],
  expenses: [100, 250, 96, 124, 25, 12, 256],
  address: {
    country: "Turkiye",
    city: "Ankara",
  },
};

let ul = document.getElementById("expanses_ul");
let input = document.getElementsByClassName("form-control")[0];
let filterButton = document.getElementById("filterButton");
let clearButton = document.getElementById("clearButton");
//filter metodu yazalım inputtaki degeri alıp
//ona gore userdaki expanses listesini filtrelesin  50 girmis isek 50 den buyuk harcamaların her bir elamını ul içene li olarak  yazdıralım

function filter() {
  let value = input.value;

  ul.innerHTML = "";
  let list = user.expenses.filter((a) => a > value);

  //   list.forEach((x) => {
  //     let li = document.createElement("li");
  //     li.innerText = x;
  //     ul.appendChild(li);
  //   });
  //   for (const key in list) {
  //     liOlustur(list[key]);
  //   }
  //   for (const iterator of list) {
  //     liOlustur(iterator);
  //   }

  list.forEach((x) => liOlustur(x));

  //list.forEach((x) => liOlustur2(x));
  filterButton.classList.add("disabled");
  clearButton.classList.remove("disabled");

  setTimeout(clearUl, 3000);
}

function liOlustur(value) {
  ul.innerHTML += `<li>${value}</li>`;
}

function liOlustur2(value) {
  let li = document.createElement("li");
  li.innerText = value;
  ul.appendChild(li);
}

function clearUl() {
  ul.innerHTML = "";
  filterButton.classList.remove("disabled");
  clearButton.classList.add("disabled");
}

let tableBody = document.querySelector("#tablebody");
let sayi = 0;
function addUser() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let username = document.getElementById("username").value;
  let age = document.getElementById("age").value;
  let password = document.getElementById("password").value;
  sayi++;
  tableBody.innerHTML += `
    <tr>
    <th scope="row">${sayi}</th>
    <td>${name}</td>
    <td>${surname}</td>
    <td>${username}</td>
    <td>${age}</td>
    <td>${password}</td>
</tr>
    `;
  clearInterval(myinterval);
}

function clearTable() {
  tableBody.innerHTML = "";
  sayi = 0;
}

let myinterval = setInterval(() => {
  sayi++;
  console.log(sayi);
  //   if (sayi == 10) {
  //     clearInterval(myinterval);
  //   }
}, 100);
