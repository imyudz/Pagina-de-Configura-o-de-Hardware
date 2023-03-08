/***************DIV DE VAGAS QUE DEVE SER ADICIONADA TODA VEZ QUE O BOTÃO FOR CLICADO********* */
{/* <div class="vagas-container">
        <p>Vaga 1</p>
            <div class="progress">
                <div class="progress-bar" data-progress="30">
                    <span>30%</span>
                </div>
            </div>
    </div> */}

/*DIV QUE DEVE SER ADICIONADA EM CÓDIGO  JS*/
function adicionaVaga() {
    //Lógica de Adicionar DIV'S:
    //Busca o container que quero adicionar as divs dentro
    let containerVagas = document.querySelector(".vagas-section");

    // Cria uma nova div com o método createElement
    let divVaga = document.createElement("div");
    divVaga.setAttribute("class", "vagas-container");
    // Cria o texto da div section
    var vagaTitle = document.createElement("p");
    vagaTitle.textContent = "Vaga X";

    //  Cria div "progress"     
    let divProgress = document.createElement("div");
    divProgress.setAttribute("class", "progress");

    // Cria a div progress bar que está dentro da div progress
    let divProgressbar = document.createElement("div");
    divProgressbar.setAttribute("class", "progress-bar");
    divProgressbar.setAttribute("data-progress", "30");

    //Cria os elementos da div progress-bar
    let spanProgressBar = document.createElement("span");
    spanProgressBar.textContent = "0%";

    // Adiciona o span a divProgressbar
    divProgressbar.appendChild(spanProgressBar);
    //Adiciona os elementos filhos da divProgress
    divProgress.appendChild(divProgressbar);

    //Adiciona os elementos filhos na div vaga
    divVaga.appendChild(vagaTitle);
    divVaga.appendChild(divProgress);
    //Adiciona a div no container final para mostrar na tela
    containerVagas.appendChild(divVaga);
}

const btnAddVagas = document.querySelector(".btn");

btnAddVagas.addEventListener("click", adicionaVaga);

