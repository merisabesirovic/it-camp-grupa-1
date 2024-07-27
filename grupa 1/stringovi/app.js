// let godine = 14;
// let nesto = `imam ${godine} godina`;
// console.log(nesto);
// let string = "Daljinski";
// let duzinaStringa = string.length;
// ["D", "a", "l", "j", "i", "n", "s", "k", "i"];

// let slovo = string.charAt(4);
// console.log(slovo);

// let slovoDrugo = string[4];

// let string2 = "Super ste uradili test";
// //toUpperCase i toLowerCase
// //SUPER Ste uradili test
// let prviDeo = string2.slice(0, 7);
// let drugiDeo = string2.slice(7, string2.length);

// let spojeno = prviDeo.toUpperCase() + drugiDeo.toLowerCase();
// console.log(spojeno);

// text = "Hello" + " " + "World!";
// text = "Hello".concat(" ", "World!");

// let tekst = "      Lejla ima crvenu haljinu        ";
// let iseceniTekst = tekst.trim();

// let string4 = "Amin nek cuti malo i Amin nek radi vise";
// console.log(string4);
// let noviString = string4.replaceAll("Amin", "Kadir");
// console.log(noviString);

// let regExperssion = /[0-9]/;

// function findURLs(text) {
//     const urlPattern = /\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/g;
//     return text.match(urlPattern);
// }

// const text = prompt("Unesite tekst:");
// const urls = findURLs(text);
// console.log(urls);

//https://bilosta.bilosta

function provera(string) {
  const urlPattern = /\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/g;
  alert(string.match(urlPattern));
}

const string = prompt("Unesite link vaseg sajta");
const daLiJeDobro = provera(string);
console.log(daLiJeDobro);

function findEmails(text) {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
  return text.match(emailPattern);
}

// Test primer
const text = "Contact us at support@example.com or sales@example.org";
console.log(findEmails(text)); // ["support@example.com", "sales@example.org"]

//Mmerisa113_./$! +/@gmail/./com
