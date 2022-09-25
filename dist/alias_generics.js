"use strict";
// Alias 
const user = { firstname: "dev", lastname: "front" };
const dateString = 'DateString';
// Generics
function identity(arg) {
    return arg;
}
const a = identity("3");
// type Id
function first(arg) {
    return arg[0];
}
const b = first(["a", "b", "c", 4]);
const c = document.querySelector('#compteur');
