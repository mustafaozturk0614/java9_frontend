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

// login metodu yazalım  username ve password degerlerimi alsın burda tanımlı user ile karşılastıralım eger dogru ise giriş başarılı alert ü versin yanlıs ise şifreveya kullanıcı adı hatalı alertunu versin

function login() {
  let username = document.getElementById("myusername").value;
  let password = document.getElementById("mypassword").value;

  if (user.username == username && user.password == password) {
    // alert("Giriş başarılı");

    // setTimeout(() => {
    //   window.location.href = "home.html";
    // }, 3000);

    setTimeout(getHomePage, 3000);
  } else {
    alert("Şifre veya kullanıcı adı hatalı");
  }
}

function getHomePage() {
  window.location.href = "home.html";
}

let form = document.getElementById("myform");

const login2 = () => {
  console.log(form);

  if (
    user.username == form.username.value &&
    user.password == form.password.value
  ) {
    // alert("Giriş başarılı");

    // setTimeout(() => {
    //   window.location.href = "home.html";
    // }, 3000);

    setTimeout(getHomePage, 3000);
  } else {
    alert("Şifre veya kullanıcı adı hatalı");
  }
};
const login3 = (e) => {
  console.log(e.target);
  e.preventDefault();

  if (
    user.username == e.target.username.value &&
    user.password == e.target.password.value
  ) {
    // alert("Giriş başarılı");

    // setTimeout(() => {
    //   window.location.href = "home.html";
    // }, 3000);

    localStorage.setItem("username", JSON.stringify(user));

    setTimeout(getHomePage, 3000);
  } else {
    alert("Şifre veya kullanıcı adı hatalı");
  }
};

// form.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.taget);
// });
form.addEventListener("submit", login3);
let button = document.querySelector("button");

console.log(button);
// form.addEventListener("mouseover", (e) => {
//   console.log(e.target.classList.add("text-danger"));
// });
// form.addEventListener("mouseout", (e) => {
//   console.log(e.target.classList.remove("text-danger"));
// });

let x = 0;
let y = 0;
let kutu = document.querySelector("#kutu");
function hareketeEt(e) {
  x += 20;
  y += 30;

  if (x >= 270) {
    x = 0;
  }
  if (y >= 270) {
    y = 0;
  }
  e.target.style.transform = `translate(${x}px, ${y}px)`;
  console.log(e.target);
}

kutu.addEventListener("mouseover", hareketeEt);
