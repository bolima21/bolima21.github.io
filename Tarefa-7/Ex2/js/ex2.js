function negrito() {
    let frase2 = document.getElementById("frase2").value;
    let vetor = frase2.split('');
    for(i=0; i < vetor.length; i++){
        console.log(i);
        if(vetor[i]=='a'||vetor[i]=='e'||vetor[i]=='i'||vetor[i]=='o'||vetor[i]=='u'||vetor[i]=='A'||vetor[i]=='E'||vetor[i]=='I'||vetor[i]=='O'||vetor[i]=='U'){
            vetor[i]= vetor[i].bold();
        }
    }
    let result = vetor.join('');
    document.body.innerHTML += "<br>"+result;
  }