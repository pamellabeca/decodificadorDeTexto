var textoInput = document.querySelector("#textoEntrada");
var textoOutput = document.querySelector("#output");

function criptoSaida (){
    var texto = textoInput.value;

    var saidaCripto = texto.replace(/[aeiou]/g, function(match) {
        switch(match) {
          case 'a':
            return 'ai';
          case 'e':
            return 'enter';
          case 'i':
            return 'imes';
          case 'o':
            return 'ober';
          case 'u':
            return 'ufat';
        }
    });

    document.getElementById('output').innerHTML = '<textarea readonly id="texto-Entrada">' + saidaCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptoSaida (){
    var texto = textoInput.value;

    var saidaCripto = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        switch(match) {
          case 'ai':
            return 'a';
          case 'enter':
            return 'e';
          case 'imes':
            return 'i';
          case 'ober':
            return 'o';
          case 'ufat':
            return 'u';
          default:
            return match;
        }
    });

    document.getElementById('output').innerHTML = '<textarea readonly id="texto-Entrada">' + saidaCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}


function copiar() {
    var textoCopy = document.getElementById('texto-Entrada');
    textoCopy.select();
    document.execCommand("copy");
    alert("Texto copiado para área de transferência");
}
  
