var vagasExistentes = document.querySelectorAll(".section-vagas");
var minhasVagas = 0;
var numeroVagas;
var botaoJaApertado;
const inputNumber = document.getElementById("input-vagas");

function stepper(btn){
    let id = btn.getAttribute("id");
    let min = inputNumber.getAttribute("min");
    let max = inputNumber.getAttribute("max");
    let step = inputNumber.getAttribute("step");
    let val = inputNumber.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val)+ calcStep;
    console.log(id, min, max, step, val);

    if(newValue >= min && newValue <= max){
        inputNumber.setAttribute("value", newValue);
        numeroVagas = newValue;
    }
}


const btnAddVagas = document.querySelector(".btn")
btnAddVagas.addEventListener("click", function() {
    console.log("clickado");
    console.log(minhasVagas);
    if (vagasExistentes.length > 0) {
        console.log("oi");
        vagasExistentes.forEach(vaga => {
            if(!botaoJaApertado){
                minhasVagas = vaga.querySelector(".description-space").querySelector("h1").textContent;
                minhasVagas = minhasVagas.split(" ");
                minhasVagas = parseInt(minhasVagas[1]);
            }else{
                return;
            }
        });
        console.log(numeroVagas, minhasVagas);
        adicionaVaga(numeroVagas, minhasVagas);
    }else{
        console.log(numeroVagas, minhasVagas);
        adicionaVaga(numeroVagas, minhasVagas);
    }
});


function adicionaVaga(quant_vagas, vagas_atuais){
    if (quant_vagas == 0) {
        return;
    }else{
        alert(quant_vagas);
        for (let i = vagas_atuais+1; i <= (vagas_atuais + quant_vagas); i++) {
            let mainContainer = document.querySelector(".form-vagas");
            let div__sectionVagas = document.createElement("div");
            div__sectionVagas.innerHTML = `
                                            <div class="section-vagas">
                                                <div class="inputs-space">
                                                    <h3>Início da Vaga</h3>
                                                    <span class="container-number-input">
                                                        <input id="inicio-vaga${i}" name="inicio-vaga${i}" type="number" min="0" required>
                                                    </span>
                                                </div>
                                                <div class="inputs-space">
                                                    <h3>Fim da Vaga</h3>
                                                    <span class="container-number-input">
                                                        <input id="fim-vaga${i}" name="fim-vaga${i}" type="number" min="0" required>
                                                    </span>
                                                </div>
                                                <div class="inputs-space">
                                                    <h3>Fita da Vaga</h3>
                                                    <span class="container-number-input">
                                                        <input id="fita-vaga${i}" name="fita-vaga${i}" type="number" min="0" max="4" required>
                                                    </span>
                                                </div>
                                                <div class="checks-space">
                                                    <div class="box-demarcacao">
                                                        <input type="checkbox" name="demarcacao${i}" id="chck-demarcacao${i}">
                                                        <h3>Demarcação</h3>
                                                    </div>
                                                    <div class="box-piscante">
                                                        <input type="checkbox" name="demarcacao${i}"id="chck-piscante${i}">
                                                        <h3>Piscante</h3>
                                                    </div>
                                                </div>
                                                <div class="description-space">
                                                    <h1>Vaga ${i}</h1>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ut dolorum nostrum, repudiandae volupta</p>
                                                </div>
                                            </div>
                                        `;

            const elementoExistente = document.querySelector('.animacao');
            mainContainer.insertBefore(div__sectionVagas, elementoExistente);
            minhasVagas = i;
            botaoJaApertado = true;
        }
        
    }
    let vagas = document.querySelectorAll(".section-vagas");
    console.log(vagas);
    console.log(minhasVagas);
    vagasExistentes = vagas;
}