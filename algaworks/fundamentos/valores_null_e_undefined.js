var x;
console.log(x);

//Quando x estiver sem valor, segue abaixo:
console.log(null === undefined);
console.log(typeof undefined);
console.log(typeof null);

console.log(x === undefined);
console.log(x === null);

x  = 10;

if(x != null) {
    console.log('Existe um valor em x', x);
} else {
    console.log('x não tem um valor útil');
}



