const keys = document.getElementById("keys");
const display = document.getElementById("inputvalue");
const clearbtn = document.getElementById("clearbtn");
const zerobtn = document.getElementById("zerobtn");
const onebtn = document.getElementById("onebtn");
const twobtn = document.getElementById("twobtn");
const threebtn = document.getElementById("threebtn");
const fourbtn = document.getElementById("fourbtn");
const fivebtn = document.getElementById("fivebtn");
const sixbtn = document.getElementById("sixbtn");
const sevenbtn = document.getElementById("sevenbtn");
const eightbtn = document.getElementById("eightbtn");
const ninebtn = document.getElementById("ninebtn");
const multiplybtn = document.getElementById("multiplybtn");
const dividebtn = document.getElementById("dividebtn");
const additionbtn = document.getElementById("additionbtn");
const subtractbtn = document.getElementById("subtractbtn");
const percentbtn = document.getElementById("percentbtn");
const dotbtn = document.getElementById("dotbtn");
const equalbtn = document.getElementById("equalbtn");
const posNegbtn = document.getElementById("posNegbtn");

clearbtn.addEventListener("click", function () {
  display.value = "";
});
zerobtn.addEventListener("click", function () {
  display.value += 0;
});
onebtn.addEventListener("click", function () {
  display.value += 1;
});
twobtn.addEventListener("click", function () {
  display.value += 2;
});
threebtn.addEventListener("click", function () {
  display.value += 3;
});
fourbtn.addEventListener("click", function () {
  display.value += 4;
});
fivebtn.addEventListener("click", function () {
  display.value += 5;
});
sixbtn.addEventListener("click", function () {
  display.value += 6;
});
sevenbtn.addEventListener("click", function () {
  display.value += 7;
});
eightbtn.addEventListener("click", function () {
  display.value += 8;
});
ninebtn.addEventListener("click", function () {
  display.value += 9;
});
multiplybtn.addEventListener("click", function () {
  display.value += "*";
});
dividebtn.addEventListener("click", function () {
  display.value += "/";
});
additionbtn.addEventListener("click", function () {
  display.value += "+";
});
subtractbtn.addEventListener("click", function () {
  display.value += "-";
});
percentbtn.addEventListener("click", function () {
  display.value = display.value / 100;
});
dotbtn.addEventListener("click", function () {
  display.value += ".";
});
equalbtn.addEventListener("click", function () {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
});
posNegbtn.addEventListener("click", function () {
  display.value = display.value * -1;
});
