const entrada = document.querySelector("#entrada");
const botaoCripto = document.querySelector("#criptografar");
const botaoDescripto = document.querySelector("#descriptografar");
const imagemTexto = document.querySelector(".saida-detalhes");
const copiar = document.querySelector(".copiar");
const resultado = document.querySelector("#resultado");

//escreve na tela
function escreve(texto) {
    imagemTexto.classList.add("esconder");
    resultado.innerHTML = texto;
}

// faz botao aparecer na tela
function apareceCopiar() {
    copiar.classList.add("aparece");
    resultado.classList.add("aparece");
}

//clipboard
function copiaTexto() {
    saidaCopiada = resultado.value;
    navigator.clipboard.writeText(saidaCopiada);
    copiar.value = "Copiado!";
    entrada.value = "";
}

//criptografa a entrada passando letra por letra
function criptografar() {
    let entradaNormal = entrada.value;
    let entradaValor = entradaNormal.toLowerCase();
    if (entradaValor != "") {
        let saidaCriptografada = "";
        for (let i = 0; i < entradaValor.length; i++) {
            if (entradaValor[i] === "a") {
                saidaCriptografada += "ai";
            } else if (entradaValor[i] === "e") {
                saidaCriptografada += "enter";
            } else if (entradaValor[i] === "i") {
                saidaCriptografada += "imes";
            } else if (entradaValor[i] === "o") {
                saidaCriptografada += "ober";
            } else if (entradaValor[i] === "u") {
                saidaCriptografada += "ufat";
            } else {
                saidaCriptografada += entradaValor[i];
            }
        }
        copiar.value = "Copiar";
        escreve(saidaCriptografada);
        apareceCopiar();
    } else {
        resultado.classList.add("aparece");
        escreve("Você precisa digitar uma mensagem!");
    }
}

//fazer a descriptografia
function descriptografar() {
    let entradaCript = entrada.value;
    let entradaMinuscula = entradaCript.toLowerCase();
    if (entradaMinuscula != "") {
        let saida = entradaMinuscula
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        copiar.value = "Copiar";
        escreve(saida);
        apareceCopiar();
    } else {
        resultado.classList.add("aparece");
        escreve("Você precisa digitar uma criptografia!");
    }
}

// adicionando os eventos de click
botaoDescripto.addEventListener("click", descriptografar);
botaoCripto.addEventListener("click", criptografar);
copiar.addEventListener("click", copiaTexto);