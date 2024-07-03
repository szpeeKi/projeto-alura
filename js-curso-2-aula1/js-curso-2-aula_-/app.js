let listaNumeroSorteados = [];
let numeroLimite = 100;
let secretNumber = gerarNumeroAleatorio();
let attempts = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Number Guessing Game');
    exibirTextoNaTela('p','Choose a number between 0 and 100');
    console.log(secretNumber);
}

exibirTextoNaTela('h1','Number Guessing Game');
exibirTextoNaTela('p','Choose a number between 0 and 100');
console.log(secretNumber);

function verificarChute(){
    let answer = document.querySelector('input').value;
    console.log(answer == secretNumber);
    console.log(secretNumber);

    if (answer == secretNumber){
        exibirTextoNaTela('h1',"That's correct!");

        let palavraTentativa = attempts > 1? 'attempts' : 'attempt';
        let mensagemTentativas = `Wow, Great Answer, Its correct!! ${secretNumber}. You got the answer with ${attempts} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (answer > secretNumber){
            exibirTextoNaTela('p','Secret number is smaller than the answer');
        } else{
            exibirTextoNaTela('p','Secret number is bigger than the answer');
        }
        attempts++;
        limparCampo()
    }

}

function gerarNumeroAleatorio(){
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaNumeroSorteados.length;

    if (quantidadeElementos == numeroLimite){
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo(){
    secretNumber = gerarNumeroAleatorio();
    limparCampo();
    attempts = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

exibirMensagemInicial();