const body = document.querySelector("body");
const colorTitle = document.querySelector(".color-title");
const firstColor = document.querySelector('input[name="first-color"]');
const secondColor = document.querySelector('input[name="second-color"]');

// Function declaration for changing the background color
function makeNewColor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}

//Using event delegation due to gradient page not having a button for color changing
//And I don't want to use seperate stylesheets or scripts for such a small thing
body.addEventListener("click", function (e) {
  if (e.target.className.toLowerCase() === "color") {
    let newColor = makeNewColor();
    body.style.background = newColor;
    colorTitle.innerText = `Current Color: \n ${newColor}`;
  }
});

body.addEventListener("input", function (e) {
  if (
    e.target.name.toLowerCase() === "first-color" ||
    e.target.name.toLowerCase() === "second-color"
  ) {
    body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
    colorTitle.innerText = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
  }
});

//Old code that didn't use event delegation

// colorBtn.addEventListener("click", () => {
//   let newColor = makeNewColor();
//   document.body.style.background = newColor;
//   colorTitle.innerText = `Current Color: \n ${newColor}`;
// });
