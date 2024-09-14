let naslov1 = document.getElementById("element1");
console.log(naslov1.textContent);

naslov1.textContent = "Drugi naslov";

let kontejner = document.getElementsByClassName("kontejner")[0];
console.log(kontejner);

let metal = document.createElement("p");

metal.textContent = "metal";

kontejner.appendChild(metal);
let papir = document.getElementById("papir");

kontejner.removeChild(papir);

let flasa = document.getElementById("flasa");

let roditelj = flasa.parentNode;
console.log(roditelj);

flasa.style.color = "red";
