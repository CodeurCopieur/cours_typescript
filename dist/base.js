"use strict";
// static type checker : verifier le type des objects et variables
// Union types
let a;
a = 5;
a = "5";
let b;
// b = true; -> erreur
// Literal types : la valeur est gauche ou droite
let d;
d = "droite";
// d = "centre" -> erreur
// Type assertion : aide ts a comprend le type d'element
const btn = document.querySelector('.btn');
// Liste des interfaces : https://developer.mozilla.org/fr/docs/Web/API
// Array
let myArray;
myArray = [1, 2, 3, 4];
let myArrayDouble;
myArrayDouble = [[1, 2, 3, 4], [5, 6, 7, 8]];
// Tupels 
let complexeArray;
complexeArray = [2, "ok", true];
let multiArray;
multiArray = [4, 5, "john", 4];
// Object
// any : n'importe quel type - Piège
let myObject;
myObject = {
    a: 5,
    b: "5"
};
// Any || Unknown (différences)
let myAny;
myAny.trim();
let myUnknow;
let john = {
    name: "John",
    age: 27
};
let dembele = {
    name: "Dembele",
    age: 25,
    isVip: true
};
let x;
x = "4";
x = 4;
let myBox = {
    a: 10
};
// Function
function add(a, b) {
    return a + b;
}
function sous(a, b) {
    console.log(a - b);
}
add(5, 6);
add(3, 4);
function echo(x) {
    return x;
}
echo(5);
