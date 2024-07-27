let niz = ["ananas", "banana", "jagoda", "kruska"];
// niz[4] = "mango";
niz.push("mango");
console.log(niz);
//push metoda ubacuje element na kraj niza
niz.pop();
//pop metoda izbacuje element sa kraja niza
console.log(niz);
niz.unshift("jabuka");
console.log(niz);
//metoda unshift dodaje element na pocetak niza
niz.shift();
console.log(niz);
//Napisite funkciju koja ce da primi niz i izracuna srednju vrednost
function izracunajSrednju(niz) {
  let prosek = 0;
  for (let i = 0; i < niz.lenght; i++) {
    prosek += niz[i];
  }
  return prosek / niz.lenght;
}
console.log(izracunajSrednju([5, 4, 2, 4, 5]));

//Napišite funkciju koja prima niz brojeva i vraća sumu svih pozitivnih brojeva u nizu.

function izracunaj(niz) {
  let zbir = 0;
  for (let i = 0; i < niz.lenght; i++) {
    if (niz[i] > 0) {
      zbir += niz[i];
    }
  }
  return zbir;
}
