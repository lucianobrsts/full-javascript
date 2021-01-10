var ativo = true;
console.log(ativo);
console.log(typeof ativo);
console.log('----------------------------');

if(0) {
    console.log('0 é true');
} else {
    console.log('0 é false');
}

console.log(!0);
console.log(!!0);
console.log(!!'');//string vazia também é false
console.log(!!NaN);//NaN também é false
console.log(!!null);//null também é false
console.log(!!undefined);//undefined também é false
console.log(!!false);//false também é false
