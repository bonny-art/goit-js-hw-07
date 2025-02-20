function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleCreateBoxes = () => {
  const amount = input.value.trim();

  if (amount < 1 || amount > 100) {
    alert("Please, enter boxes amount from 1 to 100");
    input.value = "";
    return;
  }

  container.innerHTML = createBoxes(amount);
  input.value = "";
};

const createBoxes = (amount) => {
  let markupArr = "";
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    markupArr += `<div style="background-color: ${color};width: ${boxSize}px; height: ${boxSize}px;"></div>`;

    boxSize += 10;
  }

  return markupArr;
};

const destroyBoxes = () => {
  container.innerHTML = "";
};

const handleDestroyBoxes = () => {
  const isConfirmed = confirm("Are you shure you want to delete all boxes?");

  if (isConfirmed) {
    destroyBoxes();
  }
};

const input = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");

createButton.addEventListener("click", handleCreateBoxes);
destroyButton.addEventListener("click", handleDestroyBoxes);
