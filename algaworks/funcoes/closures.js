function incrementar() {
    var valor = 0;

    return function() {
        return ++valor;
    };
}

console.log(typeof incrementar());

var fn = incrementar();
console.log(fn());
console.log(fn());
console.log(fn());