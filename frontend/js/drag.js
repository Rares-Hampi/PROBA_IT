const dragZone = document.getElementById("drop-zone");
const inputElem = document.getElementById("drop_input");
let text = document.getElementById("text");

dragZone.addEventListener("click", (e) => {
  inputElem.click();
});

inputElem.addEventListener("change", (e) => {
  afisare(inputElem.files[0].name);
});

dragZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dragZone.addEventListener("drop", (e) => {
  e.preventDefault();
  afisare(e.dataTransfer.files[0].name);
});

function afisare(file) {
  text.remove();
  text = document.createElement("p");
  text.appendChild(document.createTextNode(file));
  dragZone.appendChild(text);
}
