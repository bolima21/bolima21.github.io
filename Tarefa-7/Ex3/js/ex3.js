function frequencia() {
    let texto = document.getElementById("frase3").value;
    let vetor = texto.split(' ');
    let palavra = [];
    let frequenciaPalavra = [];
    for(i=0 ; i < vetor.length ; i++){
        
        if(palavra.includes(vetor[i])){
          frequenciaPalavra[palavra.indexOf(vetor[i])] += 1;
        } else {
          palavra.push(vetor[i]);
          frequenciaPalavra[palavra.indexOf(vetor[i])] = 1;
        }
    }
    for(i=0; i < palavra.length; i++){
      document.body.innerHTML += "<br>"+ palavra[i] + ": " + frequenciaPalavra[i];
    }
  }