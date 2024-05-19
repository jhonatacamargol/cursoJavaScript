let avaliacao = 50;
switch (avaliacao) {
    case 1:
        console.log("Resultado Mau")
        break
    case 2:
        console.log("Resultado Insuficiente")
        break
    case 3:
        console.log("Resultado Positivo")
        break
    case 4:
        console.log("Resultado Bom")
        break
    case 5:
        console.log("Resultado Eselente")
        break
    default:
        console.log("Avaliação Inválida")
        break
}
let valor = 10;
switch (true) {
    case (valor < 10):
        console.log("Valor Inferior a 10")
        break
    case (valor > 10):
        console.log("Valor Maior a 10")
        break
    default:
        console.log("Valor Igual à 10")
        break
}
let nome = "fernando";
switch (nome) {
    case "joao":
    case "joaquim":
    case "joana":
    case "jose":
        console.log("O nome começa com a letra j")
        break
    case "fernando":
        console.log("O nome começa com a letra f")
        break
    default:
        console.log("Não foi possível identificar a letra inicial")
        break
}