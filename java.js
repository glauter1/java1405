/*declarando variáveis*/
let altura;
let peso;
let imc;
/*criando uma função para calculo do IMC*/
/*comentario de bloco*/
//comentario de linha
function calcImc(){
    let altura = (document.getElementById("al").value)/100;//divisão por 100 para converter em metros.
    
    let peso = document.getElementById("ps").value;

    //converter para numero
    altura = parseFloat(altura);
    /*
    tipos de dados:
    int = numeros inteiro
    float = de ponto flutuente, exemplo o preço da gasolina 6.27
    string = texto
    boolean = verdadeiro ou falso
    */
   peso = parseFloat(peso);
   

   let imc = peso / (altura * altura);
   window.alert("Seu IMC é: " + imc);
}
function alternarTemas_escuro(){
    const corpo = document.body; // corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}
function alternarTemas_claro(){
    const corpo = document.body; // corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}