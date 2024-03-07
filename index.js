import entradaDados from "readline-sync";

//Ex 1
//let nome = entradaDados.question("Me diga seu nome!: ");
//console.log(`Olá, ${nome}!`);
 
//EX 2
//let num1 =entradaDados.questionFloat("Digite o numero 1: ")
 //let num2 =entradaDados.questionFloat("Digite o numero 2: ")
 //let total = Number(num1) + Number(num2)
 //console.log(`Total: ${total}`)

///Atividade 1
let dia = entradaDados.questionInt("Informe o dia da semana (De 1 a 7): ");

switch (dia){
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
            break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("sabado")
        break
    case 7:
        console.log("Domingo")
    default:
        console.log("Voce inseriu um numero fora da lista")
        break
}

//Atividade 2
let mes = entradaDados.questionInt("Informe o mes(De 1 a 12): ");

switch (mes){
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
            break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho")
    case 8:
        console.log("Agosto")
    case 9:
        console.log("Setembro")
    case 10:
        console.log("Outrubo")
    case 11:
        console.log("Novembro")
    case 12:
        console.log("Dezembro")   
     default:
        console.log("Voce inseriu um numero fora da lista")
        break
}

//Atividade 3
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

//Atividade 4
