const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);
  const resultado = numero1 + numero2;
  alert("Resultado: " + resultado);
});