window.onload = function () {

    const botao = document.getElementById("modoEscuro");

    if (botao) {
        botao.onclick = function () {
            document.body.classList.toggle("escuro");

            localStorage.setItem("modo", document.body.classList.contains("escuro"));
        };
    }

    if (localStorage.getItem("modo") === "true") {
        document.body.classList.add("escuro");
    }
};

function salvarDados(){

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if(nome == "" || idade == ""){

        alert("Preencha todos os campos!");

    }else{

        document.getElementById("mensagem").innerHTML =
        "Olá, " + nome + "! Você tem " + idade + " anos.";

    }

}
