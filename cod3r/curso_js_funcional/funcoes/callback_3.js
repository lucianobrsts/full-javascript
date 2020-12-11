
const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(dobro))

const nums2 = [1, 2, 3, 4, 5]
const dobro2 = n => n * 2
console.log(nums.map(dobro2))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    {nome: 'Caneta', qtde: 10, precos: 7.99},
    {nome: 'Impressora', qtde: 0, precos: 649.50},
    {nome: 'Caderno', qtde: 4, precos: 27.10},
    {nome: 'Lapis', qtde: 3, precos: 5.82},
    {nome: 'Tesoura', qtde: 1, precos: 19.20},
]