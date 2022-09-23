"use strict";
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function exemple(a, b) {
    if (a === b) {
        console.log('Type : string ou boolean', a);
    }
}
function exemple1(a) {
    console.log('Type : string ou Date', a);
}
function exemple2(a) {
    if (Array.isArray(a)) {
        return a[0];
        // verfier si c'est un tableau(true) et on retourne le premier élement du tableau
    }
    return;
}
function exemple3(a) {
    if ("target" in a) {
        console.log(a, "MouseEvent");
    }
    if ("value" in a) {
        console.log(a, "HTMLInputElement");
    }
}
function example4(a) {
    return a instanceof Date;
}
