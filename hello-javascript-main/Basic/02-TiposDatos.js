// Tipos de datos existentes en la JavaScript.

// Cadenas de textos (String)

let Name = "Sebastian"
let alias = "SebasDev"
let email = "sebastian@example.com"

// Numeros (Number)

let age = 23 // Enteros
let heigth = 1.74 // Decimales


// Booleanos (Boolean)
let isEstudient = true
let isTeacher = false


// Undefined
let underfinedvalue // No se le asigna un valor, por lo que es undefined
console.log(underfinedvalue); // Output: undefined

// Null
let nullValue = null // Se le asigna el valor null, lo que indica que no tiene valor
console.log(nullValue); // Output: null

// Symbol
let symbol1 = Symbol("mySymbol"); // Se utiliza para crear un valor único e inmutable, a menudo utilizado como identificadores únicos para propiedades de objetos
let symbol2 = Symbol("mySymbol");
console.log(symbol1); // Output: Symbol(mySymbol)
console.log(symbol2); // Output: Symbol(mySymbol)

// BigInt
let bigIntValue = 900719925474099165656565665165656466n; // Se utiliza BigInt para representar números enteros grandes que exceden el límite de Number
let myBigInt = BigInt("900719925474099165656565665165656466"); // Otra forma de crear un BigInt utilizando la función BigInt()


// Mostrar los tipos de datos utilizando typeof
console.log(typeof Name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof heigth); // Output: number
console.log(typeof isEstudient);   // Output: boolean
console.log(typeof isTeacher); // Output: boolean
console.log(typeof underfinedvalue); // Output: undefined
console.log(typeof nullValue); // Output: object (esto es un comportamiento histórico de JavaScript, null se considera un tipo de objeto)
console.log(typeof symbol1); // Output: symbol
console.log(typeof bigIntValue); // Output: bigint