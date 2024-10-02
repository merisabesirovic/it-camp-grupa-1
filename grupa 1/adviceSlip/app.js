async function uzmiAdvice() {
  const tekst = document.getElementById("adviceTxt");
  try {
    const odgovor = await fetch("https://api.adviceslip.com/advice");
    if (!odgovor.ok) {
      console.log("Nije uspelo");
    }
    const json = await odgovor.json();
    tekst.textContent = json.slip.advice;
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
}
uzmiAdvice();
