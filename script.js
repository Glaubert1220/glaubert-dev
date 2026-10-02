const texto = document.getElementById("texto");

const palavras = [
    "Estudante de Engenharia de Software",
    "Desenvolvedor Front-End em Formação",
    "Apaixonado por Tecnologia"
];

let palavra = 0;
let letra = 0;

function escrever() {
    if (letra < palavras[palavra].length) {
        texto.innerHTML += palavras[palavra].charAt(letra);
        letra++;
        setTimeout(escrever, 100);
    } else {
        setTimeout(apagar, 1500);
    }
}

function apagar() {
    if (letra > 0) {
        texto.innerHTML = palavras[palavra].substring(0, letra - 1);
        letra--;
        setTimeout(apagar, 50);
    } else {
        palavra = (palavra + 1) % palavras.length;
        setTimeout(escrever, 300);
    }
}

escrever();