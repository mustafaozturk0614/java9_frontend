let value;

value = document.getElementsByTagName("p");
console.log(value);
console.log(value[0]);
console.log(value[0].textContent);
console.log(value[0].innerText);
value[0].innerText = "Yeni paragraf";
value = document.getElementsByTagName("a");
console.log(value);
console.log(value[0].href);
console.log(value[1].href);
value[1].href = "https://www.youtube.com";
console.log(value[1].href);
value[1].target = "_blank";

value = document.getElementById("link");
console.log(value);
value.setAttribute("style", "color:red;");
value.setAttribute("target", "");
console.log(value);

value = document.getElementsByClassName("kutu");
console.log(value);
// value[1].textContent = "2.div";
value[1].classList.add("yeniClass");
console.log(value[1]);
value[1].style = "background-color:yellow;";

value = document.querySelector("p");
console.log(value);

value = document.querySelectorAll("p");
console.log(value[1]);

value = document.querySelector("#link");

console.log(value);

value = document.querySelector(".kutu");
console.log(value);
console.log(value.innerHTML);
let dersNo = 101;

value.innerHTML =
  "<ul><li>React" + dersNo + "</li><li>Java</li> <li>.Net</li> </ul>";
value.innerHTML = `<ul>
  <li>React ${dersNo} </li>
  <li>Java</li> 
  <li>.Net</li> 
  </ul>  `;

function elemanYarat() {
  let kutu = document.querySelectorAll(".kutu")[1];
  //   let kutu2 = document.getElementsByTagName("div")[1];
  let kutu3 = document.getElementsByClassName("kutu")[1];
  //   console.log(kutu3.innerHTML);
  kutu.innerHTML = "";
  let link = document.createElement("a");
  link.id = "yeniLink";
  link.className = "myLink";
  link.classList.add("instagram");
  link.href = "https://www.instagram.com";
  link.setAttribute("target", "_blank");
  link.textContent = "instagram_linki";
  link.setAttribute("style", "color:blue;");
  link.style.backgroundColor = "grey";
  link.style.border = "1px solid black";
  console.log(link);

  kutu.appendChild(link);
  kutu.appendChild(document.createElement("br"));
  kutu.appendChild(document.createElement("br"));
  kutu.style.display = "flex";

  console.log(link.getAttribute("target"));
  console.log(link.parentElement.parentElement);
  console.log(link.nextElementSibling);
}
