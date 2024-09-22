let zamisljeniBroj = Math.floor(Math.random() * 100);

let dugme = document.getElementById("posalji");

let tekst = document.getElementById("tekst");

dugme.addEventListener("click", proveri);

function proveri() {
  let broj = document.getElementById("unetiTekst").value;
  console.log(broj);
  if (broj == null || broj == "") {
    tekst.textContent = "Molim vas unesite broj";
  } else if (zamisljeniBroj == broj) {
    tekst.textContent = "Pogodili ste broj!";
  } else if (zamisljeniBroj > broj) {
    tekst.textContent = "Broj koji ste upisali je previse mali!";
  } else {
    tekst.textContent = "Broj koji ste upisali je previse velik!";
  }
  console.log(broj);
}
