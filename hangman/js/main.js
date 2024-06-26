const container = document.getElementById("container");
let letterOne = document.getElementById("letter1");
let letterTwo = document.getElementById("letter2");
let letterThree = document.getElementById("letter3");
let letterFour = document.getElementById("letter4");
let letterFive = document.getElementById("letter5");
let letterSix = document.getElementById("letter6");
let letterSeven = document.getElementById("letter7");
let count = document.getElementById("count");
const restartGame = document.getElementById("restartGame");

let livesOver = document.getElementById("livesOver");

const alphabet = document.getElementById("alphabet");
const letter = document.querySelector("letter");

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const i = document.getElementById("i");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");
const m = document.getElementById("m");
const n = document.getElementById("n");
const o = document.getElementById("o");
const p = document.getElementById("p");
const q = document.getElementById("q");
const r = document.getElementById("r");
const s = document.getElementById("s");
const t = document.getElementById("t");
const u = document.getElementById("u");
const v = document.getElementById("v");
const w = document.getElementById("w");
const x = document.getElementById("x");
const y = document.getElementById("y");
const z = document.getElementById("z");

const secretWord = "scrimba";

let counter = 10;
count.textContent = counter;

let livesLost = false;

s.addEventListener("click", function () {
  letterOne.textContent = "s";
  s, (this.style.background = "green");
});

c.addEventListener("click", function () {
  letterTwo.textContent = "c";
  c, (this.style.background = "green");
});

r.addEventListener("click", function () {
  letterThree.textContent = "r";
  r, (this.style.background = "green");
});

i.addEventListener("click", function () {
  letterFour.textContent = "i";
  i, (this.style.background = "green");
});

m.addEventListener("click", function () {
  letterFive.textContent = "m";
  m, this.classList.add("opac");
});

b.addEventListener("click", function () {
  letterSix.textContent = "b";
  b, this.classList.add("opac");
});

a.addEventListener("click", function () {
  letterSeven.textContent = "a";
  a, (this.style.background = "green");
});

[d, e, f, g, h, j, k, l, n, o, p, q, t, u, v, w, x, y, z].forEach(function (
  element
) {
  element.addEventListener("click", function () {
    element.classList.add("hidden");

    lives();
    count.textContent = counter;
  });
});

function lives() {
  if (counter > 0) {
    counter--;
    livesLost = true;
  }
  if (counter === 0) {
    livesOver.textContent = "You lost!";
  }
}

restartGame.addEventListener("click", function () {
  location.reload();
});
