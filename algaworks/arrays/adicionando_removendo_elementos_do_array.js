var emails = [];
console.log(emails.length);

console.log('');
console.log('depois do primeiro push');
emails.push('joao@email.com');
console.log(emails.length);

console.log('');
console.log('depois do segundo push');
emails.push('maria@email.com');
console.log(emails.length);

console.log('');
console.log('depois do terceiro push');
emails.push('jose@email.com');
console.log(emails.length);

console.log('');
console.log('depois do primeiro pop que remove a ultima posicao');
console.log(emails.pop());
console.log(emails.length);

console.log('');
console.log('depois do segundo pop');
var e = emails.pop();
console.log(e);
console.log(emails.length);

console.log('');
console.log('Array depois dos pops');
console.log(emails);

console.log('');
console.log('Array depois do unshift que adiciona um elemento na primeira posição');
emails.unshift('pedro@email.com')
console.log(emails);

console.log('');
console.log('Array depois do shift que remove um elemento da primeira posição');
console.log(emails.shift());
console.log(emails);



