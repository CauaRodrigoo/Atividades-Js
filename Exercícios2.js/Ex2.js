import entradaDados from "readline-sync";
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