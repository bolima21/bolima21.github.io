let senha = document.getElementById("senha");
senha.onkeyup = function() {
    let ehForte = document.getElementById("forca");
    ehForte.innerHTML = "Senha fraca";
    ehForte.style.color = "red";
    let senhaX = senha.value;
    if(isUpperCase(senhaX) && isLowerCase(senhaX) && IsNumber(senhaX)){
        ehForte.innerHTML = "Senha moderada";
        ehForte.style.color = "orange";
    }
    if(isUpperCase(senhaX) && isLowerCase(senhaX) && IsNumber(senhaX) && IsSpecialDigit(senhaX)){
        ehForte.innerHTML = "Senha forte";
        ehForte.style.color = "green";
    }
}

function isUpperCase(senhaX) {
    for(let i = 0; i < senhaX.length; i++){
        if(senhaX.charCodeAt(i)>=65 && senhaX.charCodeAt(i) <= 90)
            return true;
    }
    return false;
}
function isLowerCase(senhaX) {
    for(let i = 0; i < senhaX.length; i++){
        if(senhaX.charCodeAt(i)>=97 && senhaX.charCodeAt(i) <= 122)
            return true;
    }
    return false;
}

function IsNumber(senhaX) {
    for(let i = 0; i < senhaX.length; i++){
        if(senhaX.charCodeAt(i)>=48 && senhaX.charCodeAt(i) <= 57)
            return true;
    }
    return false;
}
function IsSpecialDigit(senhaX) {
    for (let i=0; i < senhaX.length; i++){
        if('@#!$%&*,-+.='.indexOf(senhaX.charAt(i)) != -1)
          return true;
    }
  return false;
}