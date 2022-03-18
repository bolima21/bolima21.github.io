let textoInserido = document.getElementById("frase5");
let procura = document.getElementById("procurar")
let substitui = document.getElementById("substituir");
let resultado = document.getElementById("resultado");
let botao = document.getElementById("bt");
botao.addEventListener("click", () => {
    let texto = textoInserido.value;
    let palavra = procura.value;
    let textoSubst = substitui.value;
    texto = texto.replaceAll(palavra, textoSubst);
    resultado.innerHTML = texto;
})