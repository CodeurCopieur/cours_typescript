// static type checker : verifier le type des objects et variables

// Union types
let a: number | string;
a = 5;
a = "5";

let b:number;
// b = true; -> erreur

// Literal types : la valeur est gauche ou droite
let d: "gauche" | "droite";

d = "droite"
// d = "centre" -> erreur

// Type assertion : aide ts a comprend le type d'element
const btn = <HTMLButtonElement>document.querySelector('.btn')
// Liste des interfaces : https://developer.mozilla.org/fr/docs/Web/API


// Array
let myArray: number[];
myArray = [1, 2, 3, 4]

let myArrayDouble: number[][];
myArrayDouble = [[1, 2, 3, 4], [5, 6, 7, 8]]

// Tupels 
let complexeArray: [number, string, boolean];
complexeArray = [2, "ok", true];

let multiArray: (number | string)[];
multiArray = [4, 5, "john", 4];

// Object
  // any : n'importe quel type - Piège
let myObject: {a: number, b: string};
myObject = {
  a: 5,
  b: "5"
}

// Any || Unknown (différences)

let myAny:any;
myAny.trim();

let myUnknow: unknown;
// myUnknow.trim(); -> erreur

// Interface : décrit un object + complexe
interface User {
  readonly name: string, // readonly : on ne doit pas modifier
  age: number
  employed ?: boolean // ?: propriété optionnel
}

let john: User = {
  name: "John",
  age: 27
}

// john.name = "codwerk" // -> indication mais ne bloque pas la compilation

// Entendre les interfaces (créer une interface à partir d'une interface)
interface UserVip extends User {
  isVip: true
}

let dembele: UserVip = {
  name: "Dembele",
  age: 25,
  isVip: true
}