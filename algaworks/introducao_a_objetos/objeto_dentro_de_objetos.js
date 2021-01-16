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

console.log('Objeto Joao', joao);

console.log('Cidade que o João mora: ', joao.endereco.cidade);

joao.endereco.numero = 101;
console.log(joao);

//Undefined
console.log(joao.endereco.cep);

//Com acesso dinâmico
console.log('Estado', joao['endereco']['estado']);