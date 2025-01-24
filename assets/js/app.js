const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se agregó el punto al inicio
const $b = document.querySelector('.blog');//Se le quitó en numeral # al inicio y se agregó un punto
const $l = document.querySelector('.location'); 

//Se agrega async al inicio de function
async function displayUser(username) {
  textContent = 'cargando...'; //Se le quitó el n. al inicio de esta linea
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response); //Se cambio data por response, permite que aparezca el objeto en la consola
  $n.textContent = '${response.name}';
  $b.textContent = '${response.blog}';
  $l.textContent = '${response.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);