import getJSON from "./json.js";

document.addEventListener("DOMContentLoaded", function() {
    const mainCartaz = document.querySelector(".mainCartaz");
    const cartaz = document.createElement("div");
    let descricao = JSON.parse(getJSON("https://rafaelescalfoni.github.io/desenv_web/filmes.json"));

    for (let i = 0; i < descricao.length; i++) {
        let classificacao = descricao[i].classificacao;
        let generos = descricao[i].generos;
        let elenco = descricao[i].elenco;
        let img = descricao[i].figura;
        let sinopse = descricao[i].sinopse;
        let titulo = descricao[i].titulo;
        let titulosSimilares = descricao[i].titulosSimilares;
        
        if (titulosSimilares.length == 1) {
            cartaz.innerHTML = `
            <div class="mainSection">
                <div class="mainSectionDois">
                    <div class="imgFilme">
                          <img class="mainSectionDois_topImage" src="${img}" alt="">
                    </div>
                    <div class="mainSectionDois_top_desc">      
                          <h2>${titulo}</h2>
                          <p>${generos}</p>
                          <img src="" alt="">     
                          <p><b>Elenco</b>${elenco}</p>                        
                    </div>
                    <div>
                          <p class="age${i}">${classificacao}</p> 
                    </div>
                </div>
                <p class="mainSection_sin>${sinopse}</p>
                <h4>Titulos Similares</h4>
                <div class="FilmesSimilares">
                    <div class="mainSection_Similares">
                        <img src="${descricao[titulosSimilares[0] - 1].figura}" alt="">
                    </div>
                </div>
            </div>`;
        } else {
            if (titulosSimilares.length == 2) {
                cartaz.innerHTML = `
                <div class="mainSection">
                    <div class="mainSectionDois">
                        <div class="imgFilme">
                            <img class="mainSectionDois_topImage" src="${img}" alt="">
                        </div>
                        <div class="mainSectionDois_top_desc>
                            <h2>${titulo}</h2>
                            <p>${generos}</p>
                            <img src="" alt="">
                            <p><b>Elenco</b>${elenco}</p>
                        </div>
                        <div>
                            <p class="age${i}">${classificacao}</p> 
                        </div>
                    </div>
                    <p class="mainSectionDois_sin">${sinopse}</p>
                    <h4>Titulos Similares</h4>
                    <div class="FilmesSimilares">
                        <div class="mainSection_Similares">
                            <img src="${descricao[titulosSimilares[0] - 1].figura}" alt="">
                        </div>
                        <div class="mainSection_Similares">
                            <img src="${descricao[titulosSimilares[1] - 1].figura}" alt="">
                        </div>
                    </div>
                </div>`;
            } else {
                if (titulosSimilares.length == 3) {
                    cartaz.innerHTML = `
                    <div class="mainSection">
                        <div class="mainSectionDois">
                            <div class="imgFilme">
                                <img class="mainSectionDois_topImage" src="${img}" alt="">
                            </div>
                            <div class="mainSectionDois_top_desc>
                                <h2>${titulo}</h2>
                                <p>${generos}</p>
                                <p><b>Elenco</b>${elenco}</p>
                            </div>
                            <div>
                                <p class="age${i}">${classificacao}</p> 
                            </div>
                        </div>
                        <p class="mainSectionDois_sin">${sinopse}</p>   
                        <h4>Titulos Similares</h4>
                        <div class="FilmesSimilares">
                            <div class="mainSection_Simirales">
                                <img src="${descricao[titulosSimilares[0] - 1].figura}" alt="">
                            </div>
                            <div class="mainSection_Similares">
                                <img src="${descricao[titulosSimilares[1] - 1].figura}" alt="">
                            </div>
                            <div class="mainSection_Similares">
                                <img src="${descricao[titulosSimilares[2] - 1].figura}" alt="">
                             </div>
                        </div>
                    </div>`;
                } else {
                    cartaz.innerHTML = `
                    <div class="mainSection">
                        <div class="mainSectionDois">
                            <div class="imgFilme">
                                <img class="mainSectionDois_topImage" src="${img}" alt="">
                            </div>
                            <div class="mainSectionDois_top_desc">
                                <h2>${titulo}</h2>
                                <p>${generos}</p>
                                <img src="" alt="">
                                <p><b>Elenco</h3>${elenco}</b>
                            </div>
                            <div>
                                <p class="age${i}">${classificacao}</p> 
                            </div>
                        </div>
                        <p class="mainSectionDois_sin">${sinopse}</p>
                    </div>`;
                }
            }
        }

        main.innerHTML += cartaz.innerHTML;

        let ClasseEtaria = document.querySelector(`.age${i}`);
        let ClassePermitida = document.querySelector(`.age${i}`).textContent;
        ClassePermitida = parseInt(document.querySelector(`.age${i}`).textContent);

        if (ClassePermitida >= 18) {
            ClasseEtaria.classList.add('classificacao18');
        }
        if ((ClassePermitida > 15) & (ClassePermitida < 17)) {
            ClasseEtaria.classList.add('classificacao16');
        }
        if (ClassePermitida <= 15) {
            ClasseEtaria.classList.add('classificacaoLivre');
        }
        if (ClassePermitida <= 12) {
            ClasseEtaria.textContent = `Livre`;
        }
    }
});