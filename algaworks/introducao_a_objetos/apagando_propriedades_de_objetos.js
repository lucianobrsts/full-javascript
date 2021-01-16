var joao = {
    nome: 'João',
    idade: 25,
    endereco: {
        logradouro: 'Avenida Brasil',
        numero: 100,
        complemento: 'Apto 202',
        cidade: 'Rio de janeiro',
        estado: 'RJ'
    }
}

console.log('Objeto João', joao);
delete joao.idade;
console.log('Objeto João', joao);

delete joao['endereco']['estado'];
console.log('--->', joao);