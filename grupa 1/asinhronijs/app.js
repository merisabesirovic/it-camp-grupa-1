// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)
//   //if(nesto tacno){}
//   myResolve(); // when successful
//   //else
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );

//https://lldev.thespacedevs.com/2.2.0/astronaut/?limit=100&offset=9

//https://lldev.thespacedevs.com/2.2.0/agencies

//https://anapioficeandfire.com/api/characters/583

//https://hp-api.herokuapp.com/api/characters

//https://api.bestbuy.com/click/5592e2b895800000/12345678/pdp

//https://api.adviceslip.com/advice

//https://api.artic.edu/api/v1/artworks?fields= title,artist_display,date_display,main_reference_number,thumbnail

async function dobavi() {
  try {
    const odgovor = await fetch(
      "https://api.bestbuy.com/click/5592e2b895800000/12345678/pdp"
    );
    if (!odgovor.ok) {
      console.log(`Nije uspelo ${odgovor.status}`);
    }
    const json = await odgovor.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
dobavi();
