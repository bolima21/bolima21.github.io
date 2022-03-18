let dataInserida1 = document.getElementById("frase8-1");
let dataInserida2 = document.getElementById("frase8-2");
let resultado = document.getElementById("resultado");
let botao = document.getElementById("bt");
botao.addEventListener("click", () => {
  let data1 = new Date(dataInserida1.value);
  let data2 = new Date(dataInserida2.value);
  let dataConta = Math.abs(data2.getTime() - data1.getTime());
  let distancia = Math.ceil(dataConta / (1000 * 60 * 60 * 24 * 7));
  resultado.innerHTML = "A distancia entre datas as datas é de: <br>"+ distancia +"<br> semana(s)"
})