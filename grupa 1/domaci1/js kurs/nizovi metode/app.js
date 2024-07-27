// // let boys = ["kerim", "aleksandar", "hamza", "tahir"];
// // //////////////0         1               2     3
// // let girls = ["lejla"];

// // let celaGrupa = boys.concat(girls);
// // console.log(celaGrupa);

// // let niz = [[5, 4], [6, 7, 8], [8]];
// // let noviNiz = niz.flat();
// // console.log(noviNiz);

// // //splice i slice
// // let iseceniNiz = boys.slice(0, 3);
// // console.log(iseceniNiz);
// // // celaGrupa.splice(2, 2, "merisa");
// // // celaGrupa.splice(1, 0, "jusuf");
// // // celaGrupa.splice(1, 2);
// // // console.log(celaGrupa);
// // celaGrupa.splice(2);
// // ["kerim", "aleksandar"];

// // console.log(celaGrupa);
// // let ocene = [[5, 4, 3], [2, 1, 4], [5, 3], [5]];
// // //od ovih ocena uzmete od trece do sedme i stavite u novi niz
// // //da izbrisete poslednju

// // let noveOcene = ocene.flat();
// // let novi = noveOcene.slice(2, 8);
// // // novi.pop();
// // let n = novi.length;
// // novi.splice(n - 1, 1);
// // console.log(novi);

// let niz = ["rosa", "mg", "jana", "gradska", "ledena", "knjaz", "gradska"];
// let position = niz.indexOf("gradska") + 1;
// console.log(position);

// let nesto = niz.indexOf("aquaviva");
// console.log(nesto);

// let index = niz.lastIndexOf("gradska");
// console.log(index);

// let daLiSadrzi = niz.includes("vodavoda");
// console.log(daLiSadrzi);

// let nizGodine = [13, 6, 16, 125, 31, 14, 78, 2, 14, 12, 28, 40];
// const punoletni = nizGodine.find(NadjiOdrasle);
// const punoletniiNDEX = nizGodine.findIndex(NadjiOdrasle);

// function NadjiOdrasle(value) {
//   return value >= 18 && value < 70;
// }
// console.log(punoletni);
// console.log(punoletniiNDEX);

// const drugiPunoletni = nizGodine.find((value) => value >= 18);
// console.log(drugiPunoletni);

const vode = ["rosa", "jana", "prolom", "fiji", "cesmovaca", "knjaz", "jana"];
let pronadjena = vode.indexOf("prolom");
console.log(pronadjena);

const druga = vode.lastIndexOf("jana");
console.log(druga);

const voce = ["malina", "jabuka", "borovnica", "narandza", "banana"];
const daLiIma = voce.includes("narandza");
console.log(daLiIma);

const godine = [10, 11, 13, 128, 21, 18, 16];

const vozac = godine.find(nadjiPunoletnog);

function nadjiPunoletnog(value) {
  return value >= 18 && value < 70;
}
console.log(vozac);

const indexVozaca = godine.findIndex(nadjiPunoletnog);
console.log(indexVozaca);

const vozacNaDrugiNacin = godine.find((value) => value >= 18);
