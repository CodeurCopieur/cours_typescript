console.log('hello :)');

const compteur = document.querySelector('#compteur');

let i = 0;

const incre = (e) => {
  i++;
  compteur.querySelector('span').innerText = i.toString() 
}

compteur.addEventListener('click', incre)