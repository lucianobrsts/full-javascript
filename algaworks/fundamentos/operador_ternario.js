var temFoto = false;
//Se tem foto: perfil.jpg
//Se não tem foto: mock-perfil.jpg
//<img src="pathFoto">

var pathFoto = '';
if(temFoto) {
    pathFoto = 'maria-perfil.jpg';
} else {
    pathFoto = 'mock-perfil.jpg';
}
console.log('path da foto', pathFoto)
console.log('-----------------------------')

var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';
console.log('path da foto', pathFoto);
console.log('-----------------------------')

