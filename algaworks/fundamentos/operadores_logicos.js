var ativo = true;
var administrador = false;

console.log(ativo && administrador);
console.log('----------------------------------');

console.log(ativo || administrador);
console.log('----------------------------------');

if(ativo || administrador) {
    console.log('Mostro algo na tela...');
}