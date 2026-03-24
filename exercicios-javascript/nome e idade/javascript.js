document.getElementById("informacoes").addEventListener("click", function() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var pessoa = {
        nome: nome,
        idade: idade
    };
    alert("Nome: " + pessoa.nome + ", Idade: " + pessoa.idade);
});
