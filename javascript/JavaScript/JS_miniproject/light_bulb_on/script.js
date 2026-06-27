const bulb = document.querySelector("#bulb");
const onButton = document.querySelector("#on");
const offButton = document.querySelector("#off");

onButton.addEventListener("click", turnOn);
offButton.addEventListener("click", turnOff);

function turnOn() {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
}

function turnOff() {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
}