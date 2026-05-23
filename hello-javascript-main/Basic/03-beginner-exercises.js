/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

/// Sebastian Bohorquez es un desarrollador de software con experiencia en JavaScript, especializado en el desarrollo web y la creación de aplicaciones interactivas.

// 2. Escribe un comentario en varias líneas

/** 
 * Sebastian Bohorquez es un desarrollador de software con experiencia en JavaScript, especializado
 *  en el desarrollo web y la creación de aplicaciones interactivas.
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let name = "Sebastian"
let age = 23
let heigth = 1.74
let isEstudient = true
let isTeacher = false
let underfinedvalue
let nullValue = null
let symbol1 = Symbol("mySymbol")
let bigIntValue = 900719925474099165656565665165656466n

// 4. Imprime por consola el valor de todas las variables

console.log(name);
console.log(age);
console.log(heigth);
console.log(isEstudient);
console.log(isTeacher);
console.log(underfinedvalue);
console.log(nullValue);
console.log(symbol1);
console.log(bigIntValue);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof name);
console.log(typeof age);
console.log(typeof heigth);
console.log(typeof isEstudient);
console.log(typeof isTeacher);
console.log(typeof underfinedvalue);
console.log(typeof nullValue);
console.log(typeof symbol1);
console.log(typeof bigIntValue);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo


let age = 30;
console.log(age); // Output: 30
age = 31;
console.log(age);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

name = 123
age = "Treinta"
heigth = true
isEstudient = 1
isTeacher = "Yes"
underfinedvalue = null
nullValue = undefined
symbol1 = "Not a symbol anymore"
bigIntValue = "Not a BigInt anymore"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const NAME = "Sebastian"
const AGE = 23
const HEIGHT = 1.74
const IS_ESTUDIENT = true
const IS_TEACHER = false
const UNDEFINED_VALUE = undefined
const NULL_VALUE = null
const SYMBOL1 = Symbol("mySymbol")
const BIGINT_VALUE = 900719925474099165656565665165656466n

// 9. A continuación, modifica los valores de las constantes

/**
 * esto producirá un error porque las constantes no pueden reasignar su valor por eso se le llama constante, 
 * su valor es constante y no puede cambiarse después de ser asignado
 */
// NAME = "Juan"
// AGE = 30

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse