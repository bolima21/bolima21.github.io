function ocorrencia() {
    let texto = document.getElementById("frase4").value;
    let vetor = texto.split(' ');
    let palavra = [];
    let frequenciaPalavra = [];
    for(i=0 ;  i< vetor.length ; i++){
        
        if(palavra.includes(vetor[i])){
            frequenciaPalavra[palavra.indexOf(vetor[i])] += 1;
        } else {
            palavra.push(vetor[i]);
            frequenciaPalavra[palavra.indexOf(vetor[i])] = 1;
        }
    }
    let max = 0;
    let posicionamento = 0;
    for(i=0; i < frequenciaPalavra.length; i++){
        if(frequenciaPalavra[i]> max){
            max = frequenciaPalavra[i];
            posicionamento = i;
        }
    }

    document.body.innerHTML += "<br> Palavra de maior ocorrência: "+ palavra[posicionamento] + " <br> aparencendo " + frequenciaPalavra[posicionamento] + " vezes";

    for(i=0; i < palavra.length;i++){
        document.body.innerHTML += "<br>"+ palavra[i] + ": " + frequenciaPalavra[i];
        }
  }