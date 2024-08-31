const danasnjiDatum = new Date();
console.log(danasnjiDatum);

const jusufovRodj = new Date("2013-01-07");
console.log(jusufovRodj);

function kadSamRodjen(datum) {
  const dan = new Date(datum);
  console.log(dan);
}
kadSamRodjen("2010-04-09");
kadSamRodjen("2013-10-16");
kadSamRodjen("2010-12-21");
kadSamRodjen("2014-04-10");
kadSamRodjen("2010-02-04");
kadSamRodjen("2011-03-28");
kadSamRodjen("2011-05-24");
kadSamRodjen("2010-07-07");
kadSamRodjen("2012-12-09");
kadSamRodjen("2013-01-16");
kadSamRodjen("2010-03-15");

const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);
const d1 = new Date(2018, 5, 165, 10, 33, 30);
console.log(d1);
const d2 = new Date(99, 11, 24);
console.log(d2);
const d3 = new Date(12, 11, 3);
console.log(d3);
const d4 = new Date(100000000000);
console.log(d4);

// // Napiši funkciju koJeStariji, koja prima
// //  dva objekta kao parametre. Svaki objekat predstavlja osobu i
// //  ima sledeće osobine: ime (string) i datumRodjenja (string u formatu "yyyy-mm-dd").
// //   Funkcija treba da uporedi datume rođenja obe osobe i vrati string u formatu:
// //   "Ime prve osobe je stariji/starija od imena druge osobe." ili "Obe osobe su istih godina."

// Napiši funkciju razlikaUGodinama koja prima dva datuma (u formatu "yyyy-mm-dd") kao parametre i vraća razliku između njih u godinama.

//konverzije

let string = "5";
console.log(Number(string));
let string2 = "Hamza";
console.log(Number(string2));

let bolean = false;
console.log(Number(bolean));

let datum = new Date("2000-06-01");
console.log(Number(datum));
console.log(5 + "2");
