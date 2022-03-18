let dataInserida = document.getElementById("frase7");
let resultado = document.getElementById("porExtenso");
let botao = document.getElementById("bt");
botao.addEventListener("click", () => {
    let data = new Date(dataInserida.value);
    let mes = " "
    console.log(data.getDate());

    switch(data.getMonth()){
        case 0:
            mes = "Janeiro"; 
            break;
        case 1:
            mes = "Fevereiro"; 
            break;
        case 2:
            mes = "Março"; 
            break;
        case 3:
            mes = "Abril";
            break;     
        case 4: 
            mes = "Maio";
            break;        
        case 5: 
            mes = "Junho";
            break;     
        case 6:
            mes = "Julho";
            break;        
        case 7:
            mes = "Agosto";
            break;       
        case 8:
            mes = "Setembro";
            break;
        case 9:
            mes = "Outubro";
            break;      
        case 10:
            mes = "Novembro";
            break;
        case 11:
            mes = "Dezembro";
            break;
    }

    resultado.innerHTML = (data.getDate()+1)+ " de "+ mes +" de "+ data.getFullYear(); 

})