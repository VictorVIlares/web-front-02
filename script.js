console.log("olá");
const button = document.querySelector("button");
const inputNota= document.querySelector("#nota");

//criando um elemento p
const pMensagem = document.createElement("p");

function clearform(){
    inputNota.value = "";
}

button.addEventListener("click", () => {
    event.preventDefault();
    
    const inputNotaValue = inputNota.value;

    //validação
    if (inputNota.value.trim() === '') {
        pMensagem.textContent = "Campo Obrigatório";
        inputNota.insertAdjacentElement("afterend", pMensagem)
        return false;
    }

    // logica
    if (inputNotaValue >= 6) {
        alert("Você está aprovado");
    } else {
        alert("Você está reprovado");
    }

    pMensagem.classList.add("d-none");
})