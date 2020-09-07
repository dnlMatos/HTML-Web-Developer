var x;
var y;
var media;

function consumoMedio(x, y) {
    // x = parseInt.gets();
    // y = parseFloat.gets().toFixed(1);

    x = parseInt(x);
    y = parseFloat(y).toFixed(1);

    media = x / y;

    console.log(media.toFixed(3) + ' km/l');
    console.log(x + ' valores informados ' + y);
}
consumoMedio(85, 45.9);