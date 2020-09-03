import cipher from './cipher.js';

function addClass(id, cssClass) {
    const element = document.getElementById(id)
    element.classList.add(cssClass)
}

function removeClass(id, cssClass) {
    const element = document.getElementById(id)
    element.classList.remove(cssClass)
}

function setName() {
    const name = document.getElementById("nameInput").value
    const nameSpan = document.getElementById("name")
    nameSpan.innerHTML = name
    addClass("initial", "active")
    removeClass("welcome", "active-flex")
}

function letsGo() {
    addClass("firstmessage", "active")
    removeClass("initial", "active")
}


function resultSecret() {
    const deciphertMenssage = document.getElementById("menssageDecipher")
    const firstmessage = document.getElementById("firstmessage")
    deciphertMenssage.classList.add("active")
    firstmessage.classList.remove("active")
}

function back() {
    const welcome = document.getElementById("welcome")
    const deciphertMenssage = document.getElementById("menssageDecipher")
    welcome.classList.add("active-flex")
    deciphertMenssage.classList.remove("active")
}


function encode() {
    const message = document.getElementById("setMessage").value;
    const offset = document.getElementById("offsetEncode").valueAsNumber;
    const encodeMessage = cipher.encode(offset, message);
    const result = document.getElementById("resultEncode");
    result.value = encodeMessage;
}

function decode() {
    const decipherMessage = document.getElementById("setMessageDecipher").value;
    const offset = document.getElementById("offsetDecode").valueAsNumber;
    const decodeMessage = cipher.decode(offset, decipherMessage);
    const result = document.getElementById("resultDecode");
    result.value = decodeMessage;
}



const nameInitial = document.getElementById("setName");
const goCipher = document.getElementById("letsGo");
const cipherCesar = document.getElementById("encode");
const buttonNext = document.getElementById("nextButton");
const decipherCesar = document.getElementById("encodeMessage");
const backBotton = document.getElementById("back");
nameInitial.addEventListener("click", setName)
goCipher.addEventListener("click", letsGo)
cipherCesar.addEventListener("click", encode)
buttonNext.addEventListener("click", resultSecret)
decipherCesar.addEventListener("click", decode)
backBotton.addEventListener("click", back)