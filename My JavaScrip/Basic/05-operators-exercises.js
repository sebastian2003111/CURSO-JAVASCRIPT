/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 10


let sum = a + b
let subtraction = a - b
let multiplication = a * b
let division = a / b
let modulus = a % b
let exponentiation = a ** b
let increment = a++
let decrement = b--

// Imprime el resultado de cada operación

console.log("Resultados de las operaciones aritméticas")
console.log("Suma:", sum)
console.log("Resta:", subtraction)
console.log("Multiplicación:", multiplication)
console.log("División:", division)
console.log("Módulo:", modulus)
console.log("Exponente:", exponentiation)
console.log("Incremento:", increment)
console.log("Decremento:", decrement)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let myVariable = 2
myVariable += sum // Suma con asignación
myVariable -= subtraction // Resta con asignación
myVariable *= multiplication // Multiplicación con asignación
myVariable /= division // División con asignación
myVariable %= modulus // Módulo con asignación
myVariable **= exponentiation // Exponente con asignación



// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let x = 5
let y = 10

console.log(" ----- 5 Comparaciones verdaderas --------")

console.log( x == 5)
console.log(x <= y)
console.log(34 >= y)
console.log(x < y)
console.log(y === y)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación


console.log(" ----- 5 Comparaciones falsas --------")

console.log( x > y)
console.log( x >= y)
console.log( x == y)
console.log( x == 4)
console.log( x != x)



// 5. Utiliza el operador lógico and

console.log(" Ejemplo Operador Logico AND")

console.log(x > y && 5 == 4)

// 6. Utiliza el operador lógico or

// let x = 5
// let y = 10

console.log(" Ejemplo Operador Logico OR")

console.log(x < y || 5 != x )

// 7. Combina ambos operadores lógicos

console.log(" Ejemplo Combinacion AND y OR")
// let x = 5
// let y = 10

console.log(x < y || 5 != x && x > y)


// 8. Añade alguna negación

console.log(" Ejemplo Negacion")
console.log(!(x < y || 5 != x && x > y))

// 9. Utiliza el operador ternario

console.log(" Ejemplo Operador Ternario")
let result = (x < y) ? "x es menor que y" : "x es mayor que y"
console.log(result)

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(" Ejemplo Combinacion de operadores")
let result2 = (x + y > 10 && x < y) ? "x + y es mayor que 10 y x es menor que y" : "x + y es menor o igual que 10 o x es mayor o igual que y"
console.log(result2)