var percentualImposto = 0.15;
valor = 100;
var totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar: ', totalImposto);

var valor;

//HOISTING
//Leva toda declaração de variável para o inicio das declarações... Começo do código

/*
Segue código acima após ser aplicado o Hoisting
var percentualImposto, valor, totalImposto; 
percentualImposto = 0.15;
valor = 100;
totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto)
*/