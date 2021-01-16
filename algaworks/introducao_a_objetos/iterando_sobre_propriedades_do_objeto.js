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

for(var prop in joao) {
    console.log(prop, '-->', joao[prop]);
}