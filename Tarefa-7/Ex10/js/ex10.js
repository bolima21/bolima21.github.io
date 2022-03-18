let fraseInserida = document.getElementById("frase10");
let resultado = document.getElementById("resultado");
let botao = document.getElementById("bt");
botao.addEventListener("click", () => {
    let frase = fraseInserida.value;
    let senha = "TENIStenis";
    let codigo = "POLARpolar";
    let codificador = "";

    for (let i = 0 ; i < frase.length ; i++){
        letra = frase.charAt(i);
        if(senha.indexOf(letra) != -1){
          codificador += codigo.charAt((senha.indexOf(letra)));
        }else if(codigo.indexOf(letra) != -1){
          codificador += senha.charAt((codigo.indexOf(letra)));
        }else {
          codificador += letra;
        }
    }
    resultado.innerHTML = codificador;


})