import entradaDados from "readline-sync";
let num1 = entradaDados.questionFloat("Primeiro numero: ")
let num2 = entradaDados.questionFloat("Segundo numero: ")
console.log(`Qual operaçao deseja execultar: Adiçao(+), Subtraçao(-), Multiplicaçao(*), Divisao(/) `)
let conta = entradaDados.question("Qual e sua operaçao?: ")
switch (conta) {
    case "+":
        console.log(num1 + num2 )
        break;
    case "-":
        console.log(num1 - num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    case "/":
        console.log(num1 / num2)
    default:
        console.log("Voce inseriu um numero fora da lista")
        break;
}