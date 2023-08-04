let myDiv;
let rndCol;
let divs;

for (let i = 1; i <= 16; i++) {
  myDiv = document.createElement("div");
  document.body.appendChild(myDiv);
}

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  return rndCol;
}

divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  if (i % 2 === 0) {
    divs[i].onclick = function (e) {
      e.target.style.backgroundColor = bgChange();
    };
  } else {
    divs[i].onclick = function (e) {
      e.target.style.backgroundColor = "yellow";
    };
  }
}
