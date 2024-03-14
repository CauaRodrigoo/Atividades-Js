import entradaDados from "readline-sync";
let numtabuada = entradaDados.questionInt("Informe um numero para criarmos a tabuada: ");
let cont = 0;
while (cont <= 10) {
    let resultado = numtabuada * cont;
    console.log(`${numtabuada} X ${cont} = ${resultado}`)
    cont++;
}
