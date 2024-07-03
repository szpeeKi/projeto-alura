alert('Boas Vindas ao nosso site!');

let nome = prompt('Qual seu nome');
let idade = prompt('Qual sua idade');
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos!'

if (nome && idade) {
    if (idade >= 18) {
      alert('Parabéns, você pode tirar sua habilitação!');
    } else {
      alert('Você ainda não pode tirar sua habilitação.');
    }
} else {
    alert(mensagemDeErro);
}

