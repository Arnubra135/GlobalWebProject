//Substitui if e else para situações curtas
//if(...){ sim}else{nao}

const pontuacao = 100;
//                                     V               F
const nivelUsuario = pontuacao >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);