var pessoa = '';

if(pessoa === 'FISICA') {
    // define máscara de CPF: 000.000.000-00
    console.log('Selecionado pessoa física')
} else if(pessoa === 'JURIDICA') {
    //Selecionado máscara de CNPJ: 00.000.000/000-00
    console.log('Selecionado pessoa jurídica');
} else {
    console.log('Tipo pessoa inválido')
}
