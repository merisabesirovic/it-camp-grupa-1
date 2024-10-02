// Prikazivanje teksta u plavoj boji
document
  .getElementById("showTextButton")
  .addEventListener("click", function () {
    const displayText = document.getElementById("displayText");
    displayText.textContent = "Ovo je prikazani tekst!";
  });

// Promena teksta pri prelasku miša nad naslovom
const hoverTitle = document.getElementById("hoverTitle");
const hoverTextContainer = document.getElementById("hoverText");

hoverTitle.addEventListener("mouseover", function () {
  hoverTextContainer.textContent = "Ovo je tekst pri prelasku miša!";
  hoverTextContainer.style.color = "green";
});

hoverTitle.addEventListener("mouseout", function () {
  hoverTextContainer.textContent = "";
});

// Dodavanje novog paragrafa
document
  .getElementById("addParagraphButton")
  .addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Ovo je novi element!";
    document.getElementById("paragraphContainer").appendChild(newParagraph);
  });
