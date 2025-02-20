function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const isDarkColor = (hex) => {
  const hexToLuminance = (hex) => {
    hex = hex.replace(/^#/, "");

    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    return (max + min) / 2;
  };

  return hexToLuminance(hex) <= 0.5;
};

const handleChangeColorClick = () => {
  const color = getRandomHexColor();

  if (isDarkColor(color)) {
    label.style.color = "#FFF";
  } else {
    label.style.color = "#2e2f42";
  }

  widgetBackground.style.backgroundColor = color;

  output.textContent = color;
};

const cangeColorButton = document.querySelector(".change-color");
const widgetBackground = document.querySelector(".widget");
const output = document.querySelector(".color");
const label = document.querySelector(".widget p");

cangeColorButton.addEventListener("click", handleChangeColorClick);
