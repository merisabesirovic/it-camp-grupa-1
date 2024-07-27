// // // const igrice = [
// // //   "brawl stars",
// // //   "kanter",
// // //   "fortnite",
// // //   "iron blade",
// // //   "squad busters",
// // //   "minecraft",
// // //   "angry birds",
// // //   "csgo",
// // // ];
// // // //nadjite index igrice koja je pre fortnite
// // // //na trece mesto ubacite pubg

// // // //1. zad - uklonite poslednju igricu iz niza, uzmite igrice od indeksa na kojem se nalazi fortnite + 3,
// // // //ukljucujuci fortnite
// // // //2. zad - pronadjite igrice koje imaju manje od 4 karaktera i stavite u novi niz
// // // // igrice.splice(2, 0, "pubg");
// // // // console.log(igrice);
// // // // let index = igrice.indexOf("fortnite") - 1;
// // // // console.log(index);
// // // // igrice.shift();
// // // // console.log(igrice);
// // // // let igrice8 = [];

// // // // for (let i = 0; i < igrice.length; i++) {
// // // //   if (igrice[i].length <= 8) {
// // // //     igrice8.push(igrice[i]);
// // // //   }
// // // // }

// // // // console.log(igrice8);
// // // // const niz = [3, 6, 9, 8, 5];
// // // // const kvadrirani = [];
// // // // for (let i = 0; i < niz.length; i++) {
// // // //   kvadrirani.push(niz[i] * niz[i]);
// // // // }

// // // const numbers1 = [45, 4, 9, 16, 25];

// // // let noviNiz = numbers1.map((i) => i * 2);
// // // console.log(noviNiz);
// // // console.log(numbers1);

// // // let nizSamoParni = numbers1.map((i) => {
// // //   if (i % 2 == 0) {
// // //     return i * 2;
// // //   } else return i;
// // // });
// // // console.log(nizSamoParni);

// // // let niz = [25, "string", "24", "75abc", 32, 67];
// // // //svaki element koji je broj da povecate za 1

// // // let nizModifikovan = niz.map((item) => {
// // //   if (typeof item == "number") {
// // //     return item + 1;
// // //   } else {
// // //     return item;
// // //   }
// // // });
// // // console.log(nizModifikovan);

// // // //elementi koji su duzi od 5 ostavite kako jesu, a one koji su kraci ili jednako 5
// // // //zamenite sa "s"
// // // niz2 = ["string1", "kadir", "marker", "casa", "pita"];

// // // // //dat je niz= [25, 45, 78, 89, 122, 0]
// // // // //elementi koji su veci od 0 a manji od 50 duplirajte (*2),
// // // // //elemente koji su veci od 50 kvadrirajte, a elemente jednake 0 povecajte za 1

// // // let niz = [22, 65, 72, 35];

// // // let noviNiz = niz.map((broj) => broj * 2);

// // // console.log(noviNiz);

// // // let nizDupliraniParni = niz.map((element) => {
// // //   if (element % 2 == 0) {
// // //     return element * 2;
// // //   } else {
// // //     return element;
// // //   }
// // // });

// // // console.log(nizDupliraniParni);

// // // let niz1 = [25, "string", "24", "75abc", 32, 67];
// // // // //svaki element koji je broj da povecate za 1

// // // let noviNiz1 = niz1.map((el) => {
// // //   if (typeof el === "number") {
// // //     return el++;
// // //   } else {
// // //     return el;
// // //   }
// // // });

// // // // //elementi koji su duzi od 5 ostavite kako jesu, a one koji su kraci ili jednako 5
// // // // //zamenite sa "s"
// // // niz2 = ["string1", "kadir", "marker", "casa", "pita"];

// // // let noviNiz2 = niz2.map((ele) => {
// // //   if (ele.length > 5) {
// // //     return ele;
// // //   } else {
// // //     return "s";
// // //   }
// // // });

// // // // //dat je niz= [25, 45, 78, 89, 122, 0]
// // // // //elementi koji su veci od 0 a manji od 50 duplirajte (*2),
// // // // //elemente koji su veci od 50 kvadrirajte, a elemente jednake 0 povecajte za 1

// // let nizBrojeva = [25, 65, 78, 23, 12, 14];

// // let novi = nizBrojeva.filter((e) => e > 18 && e < 65);
// // let parni = nizBrojeva.filter((e) => e % 2 == 0);

// // console.log(novi);
// // console.log(parni);

// // let nesto = nizBrojeva.filter((element, index, array) => {
// //   if (element > 18 && index % 2 === 0) {
// //     return element;
// //   }
// // });
// // console.log(nesto);

// // //ovo je primer obicne funkcije
// // function Nesto() {
// //   console.log("nesto");
// // }
// // //arrow funkcija
// // let funkcija = () => {
// //   console.log("nesto");
// // };
// // // //U JavaScript-u, koristeći metode izdvajite parne brojeve iz niza
// // // // [1, 2, 3, 4, 5, 6], a zatim drugu metodu da svaki od tih brojeva uveća za 1. Koji je rezultat?
// // let niz = [1, 2, 3, 4, 5, 6];
// // let parniUvecani = niz.filter((el) => el % 2 === 0).map((e) => e + 1);
// // console.log(parniUvecani);

// // // let filtriran = niz.filter((el) => el % 2 == 0).map((el) => el + 1);
// // // console.log(filtriran);

// // // let noviNizFiltriran = niz.filter((e) => {
// // //   if (e % 2 == 0) return e + 1;
// // // });

// // //U JavaScript-u, koristeći filter metodu, napiši kod koji
// // // izdvaja sve reči koje počinju sa slovom 'a' iz
// // //niza ['apple', 'banana', 'avocado', 'grape']. Koji je rezultat?

// // //U JS-u, koristeći filter da izdvaja brojeve veće od 10 iz
// // // liste [5, 15, 20, 25], a zatim map da te brojeve kvadrira, ali samo one kojima je index paran.
// // // Koji je rezultat?

// // function funkcija() {
// //   var kerim = "kerim";
// // }

// // console.log(kerim);

// // var amin = "cita nesto";
// // var amin = "ne slusa nista";
// // // amin = "baca neki papir";

// // let lejla = "lejla";
// // let lejla = "nesto drugo";
// // lejla = "nesto";

// // const afan = "slusa";
// // afan = "gleda";

// // const redzep;

// let niz = [3, "III-1", "10", "lazanje", false, true, undefined];
// // /////   0    1        2        3         4   5        6

// console.log(niz[1]);
// niz.pop();
// console.log(niz);
// niz.push("brawl stars");
// console.log(niz);
// niz.shift();
// niz.unshift("gta");

// let iseceniNiz = niz.slice(1, 4);
// console.log(iseceniNiz);
// console.log(niz);

// let izmenjeniNiz = niz.splice(4, 1, "unfalse");
// console.log(izmenjeniNiz);
// console.log(niz);
// niz.splice(4, 0, "pecenje");
// console.log(niz);

// let indeks = niz.indexOf("pecenje");
// console.log(indeks);
// let indeksKojiNePostoji = niz.indexOf("pecanje");
// console.log(indeksKojiNePostoji);
// /////////////0             1      2            3        4
// let voce = ["limun", "jaogoda", "lubenica", "jabuka", "limun"];
// let poslednji = voce.lastIndexOf("limun");
// console.log(poslednji);

// let daLiPostoji = voce.includes("jabuka");
// console.log(daLiPostoji);

// let godine = [15, 2, 45, 87, 32, 5000, 18];

// let vozac = godine.find((element) => element > 16 && element < 85);

// let godina = godine.find((e) => e === 87 || e === 18);
// console.log(godina);
// console.log(vozac);

// let dodataGodina = godine.map((e) => e + 1);
// console.log(dodataGodina);

// let uvecajParne = godine.map((e) => {
//   if (e % 2 === 0) return e + 1;
//   else return e;
// });
// console.log(uvecajParne);

// let filtrirani = godine.filter((e) => e > 17);
// console.log(filtrirani);
// // // //elementi koji su duzi od 5 ostavite kako jesu, a one koji su kraci ili jednako 5
// // // //zamenite sa "s"
// let niz2 = ["string1", "kadir", "marker", "casa", "pita"];
// /////////////string1, s, marker, s, s

// let nizTransformisan = niz2.map((el) => {
//   if (el.length > 5) return el;
//   else {
//     return "s";
//   }
// });
// console.log(nizTransformisan);
// let string = "aca";
// console.log(string.length);

// let niz1 = [25, "string", "24", "75abc", 32, 67, false];
// // // // //svaki element koji je broj da povecate za 1
// ////////////26, string, 24, 75abc, 33, 68, false

// let izmenjen = niz1.map((brojevi) => {
//   if (typeof brojevi === Number) brojevi++;
//   else return brojevi;
// });

// // //U JavaScript-u, koristeći filter metodu, napiši kod koji
// // // izdvaja sve reči koje počinju sa slovom 'a' iz
// let niz4 = ["apple", "banana", "avocado", "grape"];
// /////
// let filtriran = niz4.filter((maxA) => {
//   if (maxA[0] == "a") return maxA;
//   else return;
// });

// console.log(filtriran);

// //da izdvaja brojeve veće od 10 iz
// let liste = [5, 15, 20, 25];
// // // Koji je rezultat?
// //[15, 20, 25] - filter
// // 0   1   2
// // [30,20, 50] - map u kombinaciji sa indexOf

// let izmenjenaLista = liste.filter((a) => {
//   if (a < 10) return;
//   else return a;
// });

// let ultraIzmenjenaLista = izmenjenaLista.map((aa) => {
//   if (izmenjenaLista.indexOf(aa) % 2 === 0) return aa * 2;
//   else return aa;
// });

// console.log(ultraIzmenjenaLista);
let lista = [5, 15, 20, 25];
let noviniz = lista.filter((i, index) => {
  if (i > 10 && index % 2 == 0) {
  }
});
console.log(noviniz);
