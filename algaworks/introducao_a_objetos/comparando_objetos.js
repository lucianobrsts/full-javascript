//No javascript não existe um metodo de comparação de objetos (como equals e hashcode no java), caso necessite tem de implementar.

var joao = {
    nome: 'João',
    idade: 25,
    email: 'teste@email.com',
    igualA: function(obj) {
        return this.email === obj.email
    }
}

var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'teste2@email.com',
    igualA: function(obj) {
        return this.email === obj.email
    }
}

console.log(joao == maria);

console.log( 'João e Maria tem os mesmos emails', joao.igualA(maria));