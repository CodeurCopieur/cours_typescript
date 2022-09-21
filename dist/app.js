"use strict";
// console.log('hello :)');
// const compteur = document.querySelector('#compteur');
// let i = 0;
// const incre = (e) => {
//   i++;
//   compteur.querySelector('span').innerText = i.toString() 
// }
// compteur.addEventListener('click', incre)
const a = "typescript";
const b = 3;
const c = true;
const d = null;
const arr = ['a', 'b', 'c'];
const user = { firstname: "dev", lastname: "front" };
// const user: {firstname: string, lastname?: string} = {firstname: "dev", lastname: "front"}
const date = new Date();
const cb = (e) => {
    console.log(e);
};
const cptr = document.querySelector('#compteur');
const cptr2 = document.querySelector('#compteur');
function printId(id) {
    console.log(id.toString());
}
const compteur = document.querySelector('#compteur');
let i = 0;
const incre = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', incre);
// ? utilise addEeventListener si le compteur existe
