const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");

// Dodajemo elemente u listu
const subjects = ["Matematika", "Hemija", "Fizika"];

subjects.forEach((subject) => {
  const listItem = document.createElement("li");
  listItem.textContent = subject;
  taskList.appendChild(listItem);
});

// Sklanjamo Hemiju
const hemijaItem = Array.from(taskList.children).find(
  (item) => item.textContent === "Hemija"
);
if (hemijaItem) {
  taskList.removeChild(hemijaItem);
}

// Menjamo Fiziku u Istoriju
const fizikaItem = Array.from(taskList.children).find(
  (item) => item.textContent === "Fizika"
);
if (fizikaItem) {
  fizikaItem.textContent = "Istorija";
  fizikaItem.style.color = "blue"; // Menjamo boju
}
