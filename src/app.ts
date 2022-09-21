// console.log('hello :)');

// const compteur = document.querySelector('#compteur');

// let i = 0;

// const incre = (e) => {
//   i++;
//   compteur.querySelector('span').innerText = i.toString() 
// }

// compteur.addEventListener('click', incre)

const a : string = "typescript";
const b : number = 3;
const c : boolean = true;
const d : null = null;
const arr : string[] = ['a', 'b', 'c'];
const user: {firstname: string, [key: string]: string} = {firstname: "dev", lastname: "front"};
// const user: {firstname: string, lastname?: string} = {firstname: "dev", lastname: "front"}
const date: Date =  new Date();

const cb : Function = (e: MouseEvent) => {
  console.log(e);
}

const cptr = document.querySelector('#compteur') as HTMLButtonElement;
const cptr2 = <HTMLButtonElement>document.querySelector('#compteur');

function printId(id: number | string) {
  console.log(id.toString());
  
}

const compteur = document.querySelector('#compteur');

let i = 0;

const incre = (e: Event) => {
  e.preventDefault()
  i++;

  const span = compteur?.querySelector('span');

  if(span) {
    span.innerText = i.toString() 
  }
}

compteur?.addEventListener('click', incre)
// ? utilise addEeventListener si le compteur existe