var x = 'Algaworks';
console.log(x);
console.log(typeof x);
console.log('------------------------------');

x = "Algaworks";
console.log(x);
console.log(typeof x);
console.log('------------------------------');

console.log(x);
console.log(x.length);
console.log('------------------------------');

console.log(x);
console.log(x.length);
console.log('------------------------------');

var a = 'Algaworks';
var b = 'Algaworks';
console.log('Teste de igual usando operadores:');
console.log(a === b);
console.log(a == b);
console.log('------------------------------');

var m = 'Seja bem vindo a Algaworks';
console.log('Procurando o indece de palavras na string');
console.log(m.indexOf('vindo'));
console.log(m.indexOf('a'));
console.log(m.lastIndexOf('a'));
console.log(m.indexOf('z'));
console.log('------------------------------');

var s = 'A arte de programar'
console.log('Pegando partes de uma string');
console.log(s);

var novaString = s.substring(2, 6)
console.log(novaString);

novaString = s.substring(2)
console.log(novaString);

novaString = s.slice(2, 6)
console.log(novaString);

novaString = s.slice(2)
console.log(novaString);

novaString = s.slice(-17, -13)
console.log(novaString);

novaString = s.substr(2, 4)
console.log(novaString);

var m = 'Seja bem vindo <nome>';
m.replace('<nome>', 'José');
console.log(m.replace('<nome>', 'José'));
console.log('------------------------------');

console.log('Transformando em maiusculas e minusculas');
console.log(novaString.toLowerCase());
console.log(novaString.toUpperCase());
console.log('------------------------------');

console.log('Concatenando');
var h = 'Olá' + ' ' + 'Ricardo';
console.log(h);

h = 'Olá'.concat(' ', 'Ricardo');
console.log(h);
console.log('------------------------------');

console.log('Procurando caracteres');
console.log(h.charAt(4));
console.log('------------------------------');

