let div = document.getElementById("kutija");

let naslov2 = document.createElement("h2");
naslov2.textContent = "Naslov2";
div.appendChild(naslov2);

naslov2.addEventListener("click", prikaziSliku);

function prikaziSliku() {
  // Kreiraj sliku
  let slika = document.createElement("img");
  slika.src =
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg"; // Zameniti sa URL-om tvoje slike
  slika.alt = "Opis slike";
  div.appendChild(slika);

  // Kreiraj dugme
  let button = document.createElement("button");
  button.textContent = "Button1";
  div.appendChild(button);
}
