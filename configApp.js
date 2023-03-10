const vagasExistentes = document.querySelectorAll(".section-vagas");
var minhasVagas;
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

function adicionaVaga(quant_vagas, vagas_atuais){
    if (quant_vagas == 0) {
        return;
    }else{
        alert(quant_vagas);
        for (let i = vagas_atuais+1; i <= (vagas_atuais + quant_vagas); i++) {

            // let mainContainer = document.querySelector(".form-vagas");
            let div__sectionVagas = document.createElement("div");
            div__sectionVagas.setAttribute("class", "section-vagas");

            //         let div__inputsSpace = document.createElement("div");
            //         div__inputsSpace.setAttribute("class", "inputs-space");
            //             let h3__inputsSpace = document.createElement("h3");
            //             h3__inputsSpace.textContent = "Início da Vaga";
            //             let span__inputsSpace = document.createElement("span");
            //             span__inputsSpace.setAttribute("class", "container-number-input");
            //                 let input__span__inputsSpace = document.createElement("input");
            //                 input__span__inputsSpace.setAttribute("id", String("inicio-vaga"+i));
            //                 input__span__inputsSpace.setAttribute("name", String("inicio-vaga"+i));
            //                 input__span__inputsSpace.setAttribute("type", "number");
            //                 input__span__inputsSpace.setAttribute("min", "0");
            //                 input__span__inputsSpace.required = true;

            //         let div__inputsSpace2 = document.createElement("div");
            //         div__inputsSpace2.setAttribute("class", "inputs-space");
            //             let h3__inputsSpace2 = document.createElement("h3");
            //             h3__inputsSpace2.textContent = "Fim da Vaga";
            //             let span__inputsSpace2 = document.createElement("span");
            //             span__inputsSpace2.setAttribute("class", "container-number-input");
            //                 let input__span__inputsSpace2 = document.createElement("input");
            //                 input__span__inputsSpace2.setAttribute("id", String("fim-vaga"+i));
            //                 input__span__inputsSpace2.setAttribute("name", String("fim-vaga"+i));
            //                 input__span__inputsSpace2.setAttribute("type", "number");
            //                 input__span__inputsSpace2.setAttribute("min", "0");
            //                 input__span__inputsSpace2.required = true;

            //         let div__inputsSpace3 = document.createElement("div");
            //         div__inputsSpace3.setAttribute("class", "inputs-space");
            //             let h3__inputsSpace3 = document.createElement("h3");
            //             h3__inputsSpace3.textContent = "Fita da Vaga";
            //             let span__inputsSpace3 = document.createElement("span");
            //             span__inputsSpace3.setAttribute("class", "container-number-input");
            //                 let input__span__inputsSpace3 = document.createElement("input");
            //                 input__span__inputsSpace3.setAttribute("id", String("fita-vaga"+i));
            //                 input__span__inputsSpace3.setAttribute("name", String("fita-vaga"+i));
            //                 input__span__inputsSpace3.setAttribute("type", "number");
            //                 input__span__inputsSpace3.setAttribute("min", "0");
            //                 input__span__inputsSpace3.setAttribute("max", "4");
            //                 input__span__inputsSpace3.required = true;
                    
            //         let div__decriptionSpace = document.createElement("div");
            //         div__decriptionSpace.setAttribute("class", "description-space");
            //             let h1__descriptionSpace = document.createElement("h1");
            //             h1__descriptionSpace.textContent = String("Vaga "+i);
            //             let p__descriptionSpace = document.createElement("p");
            //             p__descriptionSpace.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ut dolorum nostrum, repudiandae volupta";
            div__sectionVagas.innerHTML = "";

            const elementoExistente = document.querySelector('.animacao');
            mainContainer.insertBefore(div__sectionVagas, elementoExistente);

            div__sectionVagas.appendChild(div__inputsSpace);
            div__sectionVagas.appendChild(div__inputsSpace2);
            div__sectionVagas.appendChild(div__inputsSpace3);
            div__sectionVagas.appendChild(div__decriptionSpace);

            div__inputsSpace.appendChild(h3__inputsSpace);
            div__inputsSpace.appendChild(span__inputsSpace);
            span__inputsSpace.appendChild(input__span__inputsSpace);

            div__inputsSpace2.appendChild(h3__inputsSpace2);
            div__inputsSpace2.appendChild(span__inputsSpace2);
            span__inputsSpace2.appendChild(input__span__inputsSpace2);

            div__inputsSpace3.appendChild(h3__inputsSpace3);
            div__inputsSpace3.appendChild(span__inputsSpace3);
            span__inputsSpace3.appendChild(input__span__inputsSpace3);

            div__decriptionSpace.appendChild(h1__descriptionSpace);
            div__decriptionSpace.appendChild(p__descriptionSpace);

            minhasVagas = i;
            botaoJaApertado = true;
        }
    }
}

const btnAddVagas = document.querySelector(".btn")
btnAddVagas.addEventListener("click", function() {
    if (vagasExistentes) {
        vagasExistentes.forEach(vaga => {
            if(botaoJaApertado){
                console.log(numeroVagas, minhasVagas);
                adicionaVaga(numeroVagas, minhasVagas);
            }else{
                minhasVagas = vaga.querySelector(".description-space").querySelector("h1").textContent;
                minhasVagas = minhasVagas.split(" ");
                minhasVagas = parseInt(minhasVagas[1]);
                console.log(numeroVagas, minhasVagas);
                adicionaVaga(numeroVagas, minhasVagas);
            }
        });
    }else{
        adicionaVaga(numeroVagas, 0);
    }
});

