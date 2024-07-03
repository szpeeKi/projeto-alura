let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function mensagemAlerta(){
    console.log('Eu amo JS');
};

function consoleClicado(){
    console.log('O botao foi clicado');
};

function cidadePergunta(){
    let resposta = prompt('Fale um nome de uma cidade do Brasil');
    alert(`Estive em ${resposta} e lembrei de voce.`);
};

function Somar(){
    let n1 = parseInt(prompt('Fale um numero'));
    let n2 = parseInt(prompt('Fale um segundo numero'));
    let soma = n1 + n2;
    alert(soma);
};