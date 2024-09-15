function prikaziTekst() {
  let element = document.getElementById("tekst");
  element.textContent = "Nesto";
}

function prikaziDrugi() {
  let element = document.getElementById("drugiTekst");
  element.textContent = "Drugi tekst";
}

function skloni() {
  let element = document.getElementById("drugiTekst");
  element.textContent = "";
}
