var nome = 'Algaworks'; //variável global

var capitalizar = function() {
    //nome é uma variávvel local à função capitalizar
    var nome = 'Algaworks'.toUpperCase();
}

capitalizar();
console.log('nome', nome);

var capitalizar2 = function() {
    nome = 'Algaworks'.toUpperCase();
}

capitalizar2();
console.log('nome2', nome)