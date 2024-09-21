let div = document.getElementById("kutija");

let naslov2 = document.createElement("h2");
naslov2.textContent = "Naslov2";

div.appendChild(naslov2);

naslov2.addEventListener("click", prikaziSliku);

function prikaziSliku() {
  let slika = document.createElement("img");

  let button = document.createElement("button");
  button.textContent = "Button1";
  div.appendChild(button);
}
