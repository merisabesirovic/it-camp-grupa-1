let pitanje = prompt("Hoces li napolje");
console.log(pitanje);
console.log(typeof pitanje);

// Korisnik unosi broj koristeći prompt funkciju
var broj = prompt("Unesite broj:");

// Konvertujemo uneti tekst u broj koristeći parseFloat funkciju
broj = parseFloat(broj);

// Proveravamo uslovima da li je broj pozitivan, negativan ili nula
if (broj > 0) {
  console.log("Broj je pozitivan.");
} else if (broj < 0) {
  console.log("Broj je negativan.");
} else {
  console.log("Broj je nula.");
}
// Napiši program koji korisnika pita za korisničko ime i šifru.
// Ako je korisničko ime "admin" i šifra "12345", ispiši poruku
//"Dobrodošli, admin!", u suprotnom ispiši poruku "Pogrešno korisničko ime ili šifra!".

let userName = prompt("Unesite korisnicko ime");
let sifra = prompt("Unesite sifru");

if (userName === "admin" && sifra === "12345") {
  console.log("Ulogovani ste");
} else {
  console.log("Greska");
}
