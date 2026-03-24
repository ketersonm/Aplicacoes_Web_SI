function gerar() {
    var numero = Math.floor(Math.random() * 100) + 1;
    alert("O numero aleatorio é: " + numero);
}

document.getElementById("gerar").onclick = gerar;