//Function declaration
function somar(a, b) {
    console.log('arguments =>', arguments);
    return a + b;
}


//Function expression
var subtrair = function(a, b) {
    return a - b;
}

console.log(somar(2, 10));
console.log(subtrair(10, 2));

console.log('typeof subtrair é do tipo de dado: ', typeof subtrair);