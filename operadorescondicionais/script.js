var condicaoDoTempo = "sol";

if(condicaoDoTempo == 'sol'){
    console.log("O tempo está bom para um passeio")
} else{
    console.log('O tempo não está bom')
}

let numero = 9;

if(numero < 10){
    console.log('O número é menor que 10.')
}else{
    console.log('O número é igual ou superior a 10.')
}

let avaliacao = 0;

if(avaliacao <= 1){
    console.log('Mau resultado')
} else if(avaliacao == 2){
    console.log('Resultado negativo')
} else if(avaliacao ==3){
    console.log('Resultado positivo')
} else if(avaliacao == 4){
    console.log('Resultado bom')
} else{
    console.log('resultado excelente')
}

let enviarEmail = true;
let frase = enviarEmail ? "Enviar" : "Não enviar";
console.log(frase);

let valor = 1;
let frasen = valor < 5 ? "sim" : "não";
console.log(frasen);

let valore = 100;
valore == 10 ? console.log('SIM') : console.log('NÃO');