var numero;
var positivos = 0;
var negativos = 0;
var pares = 0;
var impares = 0;

function contaPositivo() {
    for (let i = 1; i <= 5; i++) {
        numero = gets("Informe o " + i + " valor: ");
        if (numero > 0) {
            positivos += 1;
        } else if (numero < 0) {
            negativos += 1;
        }

        if (numero % 2 === 0 || numero === 0) {
            pares += 1;
        } else {
            impares += 1;
        }
    }
    console.log(pares + ' valor(es) par(es)');
    console.log(impares + ' valor(es) impar(es)');
    console.log(positivos + ' valor(es) positivo(s)');
    console.log(negativos + ' valor(es) negativo(s)');
}

contaPositivo();