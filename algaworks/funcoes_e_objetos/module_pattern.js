var contador = (function() {
    var valor = 0; // Equivale a privado
    var incrementar = function() {
        valor++;
        funcaoPrivada();
    };

    var reset = function() {
        console.log('Valor do contador: ', valor);
        valor = 0;
    }

    function funcaoPrivada() {
        console.log('Função Privada...');
    }

    return {
        incrementar: incrementar,
        reset: reset 
    }
})();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.reset();