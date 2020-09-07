var numero;
var positivos = 0;

function contaPositivo() {
    for (i = 1; i <= 6; i++) {
        numero = gets("Informe o " + i + " valor: ");
        if (numero > 0) {
            positivos += 1;
        }
    }
    console.log(positivos + ' valores positivos');
}

contaPositivo();