//import cipher from './cipher.js';

//console.log(cipher.decode(3, "sofia"));

function setName() {
    const name = document.getElementById("nameInput").value
    const nameSpan = document.getElementById("name")
    nameSpan.innerHTML = name
    const initial = document.getElementById("initial")
    initial.classList.add("active")
    const welcome = document.getElementById("welcome")
    welcome.classList.remove("active")
}

function letsGo() {
    const firstmessage = document.getElementById("firstmessage")
    firstmessage.classList.add("active")
    const initial = document.getElementById("initial")
    initial.classList.remove("active")
}


function resultSecret() {
    const deciphertMenssage = document.getElementById("menssageDecipher")
    deciphertMenssage.classList.add("active")
    const firstmessage = document.getElementById("firstmessage")
    firstmessage.classList.remove("active")
}

function encode() {
    const message = document.getElementById("setMessage").value;
    const offset = document.getElementById("offsetEncode").valueAsNumber;
    const encodeMessage = cipher.encode(offset, message);
    const result = document.getElementById("resultEncode");
    result.value = encodeMessage;
}

function decode() {
    const encodeMessage = document.getElementById("resultEncode").value;
    const offset = document.getElementById("offsetDecode").valueAsNumber;
    const decodeMessage = cipher.decode(offset, encodeMessage);
    const result = document.getElementById("resultDecode");
    result.value = decodeMessage;
}

function initilize() {
    const nameInitial = document.getElementById("setName");
    nameInitial.addEventListener("click", setName)
    const goCipher = document.getElementById("letsGo");
    goCipher.addEventListener("click", letsGo)
    const cipherCesar = document.getElementById("encode");
    cipherCesar.addEventListener("click", encode)
    const buttonNext = document.getElementById("nextButton");
    buttonNext.addEventListener("click", resultSecret)
    const decipherCesar = document.getElementById("encodeMessage)");
    decipherCesar.addEventListener("click", decode)
}
window.onload = initilize