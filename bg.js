const body = document.querySelector("body");
const IMG_NUMBER = 7;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgimage");

  body.appendChild(image);
}
function genRandom() {
  const number = Math.floor(1 + Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
