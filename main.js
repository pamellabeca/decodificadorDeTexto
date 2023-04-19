var textoInput = document.querySelector("#textoEntrada");
var textoOutput = document.querySelector("output");

function criptoSaida (){
    var texto = textoInput.value;

    var saidaCripto = texto.replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="textoEntrada">' + saidatCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function decriptoSaida (){
    var texto = textoInput.value;

    var saidaCripto = texto.replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById('aside').innerHTML = '<textarea readonly id="texto-entrada">' + saidatCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {

    var textoCopy = document.getElementById('textoEntrada');

    textoCopy.select();
    document.execCommand('copy');
    alert("Texto copiado para área de transferência");
}
