var valor;
var cedulas = [100, 50, 20, 10, 5, 2, 1];
var qtdCedulas = 0;

function contagemCedulas(valor) {
    //   valor = gets("Informe o valor: ");
    console.log(valor);

    for (let i = 0; i < cedulas.length; i++) {
        if (valor >= cedulas[i]) {
            var dividendo = Math.floor(valor / cedulas[i]);
            // console.log('Dividindo ' + valor + ' por ' + cedulas[i]);

            console.log(dividendo + ' cédulas de ' + cedulas[i]) + ',00';
            valor -= (dividendo * cedulas[i]);

            // console.log('Novo valor: ' + valor);
        } else {
            console.log(qtdCedulas + ' cédulas de ' + cedulas[i]) + ',00';
        }
    }
}

contagemCedulas(valor);