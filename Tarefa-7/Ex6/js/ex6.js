let dataInserida = document.getElementById("texto");
let vida = document.getElementById("tempoDeVida");
let botao = document.getElementById("bt");
botao.addEventListener("click", () => {
    let agora = new Date();
    let data = new Date(dataInserida.value);
    let dataConta = Math.abs(agora.getTime() - data.getTime());
    let dias = Math.ceil(dataConta / (1000 * 60 * 60 * 24));
    vida.innerHTML = "O seu tempo de vida é de: "+ dias +"dias";
})