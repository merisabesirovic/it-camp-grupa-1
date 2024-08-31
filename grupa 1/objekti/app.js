const kadir = ["crna", "crna", 13, true];

const kadirObjekat = {
  boja_ociju: "crna",
  boja_kose: "crna",
  godine: 13,
  punoletan: false,
  daLiCuti: false,
  ime: "Kadir",
  prezime: "Nisic",
  ucuti: function () {
    console.log("Kadir je ucutao");
    return this.daLiCuti;
  },
  predstaviSe: function () {
    return `Ja sam ${this.ime} ${this.prezime} i
     imam ${this.godine} godina`;
  },
};

console.log(kadirObjekat.predstaviSe());
console.log(kadirObjekat.predstaviSe);

kadirObjekat.ime = function () {
  return "Kadir";
};

const osoba = {};
osoba.ime = "Redzep";
osoba.prezime = "Bacevac";
osoba.boja_kose = "crna";
osoba.boja_ociju = "crna";

osoba.boja_kose = "plava";
osoba["boja_kose"] = "plava";

let vrednosti = Object.values(osoba);
console.log(vrednosti);

let kljucevi = Object.entries(osoba);
console.log(kljucevi);

console.log(osoba["boja_kose"]);
const obj = new Object();
delete osoba.ime;
console.log(osoba["ime"]);
//napisite objekat automobil koji ce da ima svojstva boja,
//naziv,
//tezina, i ima metode stani i kreni koje ce da ispisuju auto je stao i autp je krenuo

const bus = {
  naziv: "Sandzaktrans",
  brojSedista: 25,
  ideKa: "Lukare",
  ideOd: "Park",
  vozac: "Recko",
  pokvaren: false,
  stigni: function () {
    let temp = this.ideKa;
    this.ideKa = this.ideOd;
    this.ideOd = temp;
  },
};
console.log(bus.ideKa);
console.log(bus.ideOd);

bus.stigni();

console.log(bus.ideKa);
console.log(bus.ideOd);

bus.stigni();

console.log(bus.ideKa);
console.log(bus.ideOd);

//JSON

//{"name" : "Merisa",
//"prezime" : "Besirovic"
//}
