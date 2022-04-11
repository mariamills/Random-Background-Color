const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let newColor = makeNewColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

function makeNewColor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}
