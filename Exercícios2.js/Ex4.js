import entradaDados from "readline-sync";
let categoria = entradaDados.question("Informe o sua categoria: ")
let salario = entradaDados.questionFloat("Informe o seu Salario: ")
switch (categoria) {
    case "A":
        console.log(salario*1.05)

        break;
    case "B":
        console.log(salario*1.1)

        break;
    case "C":
        console.log(salario*1.15)


        break;
    case "D":
        console.log(salario*1.2)


        break;


    default:

    console.log("Informações invalidas")
        break;
}