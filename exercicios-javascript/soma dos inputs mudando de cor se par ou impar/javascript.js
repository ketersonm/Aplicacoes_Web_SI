const botao = document.getElementById("soma");
botao.addEventListener("click", function() {
  const input1 = Number(document.getElementById("input1").value);
  const input2 = Number(document.getElementById("input2").value);
  const soma = input1 + input2;
  const parOuImpar = soma % 2 === 0 ? 'par' : 'ímpar';


  if (parOuImpar === 'par') {
    botao.style.backgroundColor = 'blue';
  } else {
    botao.style.backgroundColor = 'green';
  }

  alert("Soma: " + soma + " (" + parOuImpar + ")");
});