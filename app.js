let listaNumerosSecretos = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let tentativaPlural = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${tentativaPlural}.`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}  

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaNumerosSecretos.length;
    if (quantidadeElementosNaLista == numeroLimite) {
        listaNumerosSecretos = [];
    }
    if (listaNumerosSecretos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaNumerosSecretos.push(numeroEscolhido);
        console.log(listaNumerosSecretos);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



//---------------------------------------------------------------------------------------------------------

// // Criar uma função que exibe "Olá, mundo!" no console.

// function exibirOla(){
//     console.log('Olá, mundo!');
// }

// exibirOla();

// // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function exibirOlaNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }
  
// exibirOlaNome("Alice");

// // Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function DobroNumero(numero) {
//     console.log(numero * 2);
// }

// DobroNumero(5);

// // Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function calcularMedia(a, b, c) {
//     return (a + b + c) / 3;
// }
  
// let media = calcularMedia(4, 7, 10);
// console.log(media);

// // Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function retornarMaior(a, b) {
//    return a > b ? a : b;
// }

// let maior = retornarMaior(8, 6);
// console.log(maior);

// // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function multiplicação(a) {
//     return a * a;
// }

// let resultado = multiplicação(2);
// console.log(resultado);

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function calcularMassaCorporal(altura, peso) {
//     let imc = peso / (altura * altura);

// }

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
  
//     return fatorial;
// }
  
//   let numero = 6;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);

//  Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// function converterDólar(valor) {
//     let dolar = 4.80;
//     valor = valor * dolar;
//     return valor;
// }

// let valor = 10;
// let resultado = converterDólar(valor);
// console.log(`O valor em dólares corresponde à ${resultado} reais.`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// function calcularAreaPerimetro(altura, largura) {
//    let area = altura * largura;
//    let perimetro = 2 * (altura + largura);
//    console.log(`A área desta sala é ${area}`);
//    console.log(`O perímetro desta desta sala é ${perimetro}`);
    
// }

// altura = 3;
// largura = 4;
// calcularAreaPerimetro(altura, largura);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function calcularAreaPerimetroCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
//     console.log(`A área deste círculo é ${area.toFixed(2)} em metros.`);
//     console.log(`O perímetro deste círculo é ${perimetro.toFixed(2)} em metros.`);
// }

// raio = 4;
// calcularAreaPerimetroCircular(raio);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function tabuada(numero) {
//     for (let i = 1; i <= 10; i++){
//         let resultado = numero * i;
//         console.log(`${numero} X ${i} = ${resultado}`);
       
//     }
// }

// numero = 4;
// tabuada(numero);

// Crie uma lista vazia, com o nome listaGenerica.

// let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Phyton'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

// linguagensDeProgramacao.push('Java', 'Ruby', 'Golang');

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

// let listaNomes = ['José', 'João', 'Pedro'];
// console.log(listaNomes[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

// let listaNomes = ['José', 'João', 'Pedro'];
// console.log(listaNomes[1]);

// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

// let listaNomes = ['José', 'João', 'Pedro'];
// console.log(listaNomes[2]);






