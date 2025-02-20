const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleInput = (e) => {
  const text = e.target.value.trim();

  if (!text) {
    output.textContent = "Anonymous";
    return;
  }

  output.textContent = text;
};

input.addEventListener("input", handleInput);
