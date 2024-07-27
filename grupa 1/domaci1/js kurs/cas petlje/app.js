// console.log("aleksandar");

// for (let i = 0; i < 100; i++) {
//   console.log("aleksandar\n");
//   console.log("petrovic");
// }

// for (let i = 6; i <= 12; i++) {
//   console.log(i);
// }

// i = 1;          1
// i=1+1=2;        2
// i=2+1=3         3
// i=3+1=4         4
// i=4+1=5         5
// i=6             6
// i=7             7
// i=8                8
// i=9                9
// i=10            10
// i=11

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// i=10;   10
// i=9     9
// i=8     8
// i=7     7
// i=6     6
// . . .
// i=1     1
// i=0

// for (let i = 0; i <= 10; i = i * 2) {
//   console.log(i);
// }

// i = 0;
// 0;
// i = 0;
// 0;
// i = 0;
// 0;

// for (let i = 0; i <= 10; i++) {
//   if (i === 3) {
//     console.log(i);
//   }
// }

// for (let i = 9; i >= 1; i = i - 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   if (i % 2 != 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

// i=10;       x
// i=9         9
// i=8         x
// i=7         7
let start = Number(prompt("Unesi pocetak"));
let kraj = Number(prompt("Unesi kraj"));

for (let i = start; i <= kraj; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

for (i = 0; i <= 10; i++) {
  if (i === 6) {
    break;
  } else if (i === 2) {
    continue;
  }
  console.log(i);
}
//break da zaustavimo petlju
//continue da preskocimo
// od 0 do 15, ako je broj deljiv sa 3 preskoci ga, a ako je 11 prekini program
for (i = 0; i < 15; i++) {
  if (i % 3 === 0) {
    continue;
  } else if (i === 11) {
    break;
  } else {
    console.log(i);
  }
}
