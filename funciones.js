// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    function despedir() {
        console.log('Adios');
    }

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    function multiplicarPorDos (numero) {
        return numero * 2
    }
    console.log(multiplicarPorDos(5));

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    function esMayorDeEdad (edad) {
        if ( edad > 18) {
            return true;
        }
        else {
            return false;
        }
    }
    const resultado = esMayorDeEdad (19)
    console.log(resultado);

// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    function multiplicar(a, b) {
        return a * b
    }
    const resultadomultiplicacion = multiplicar(2, 3)
    console.log(resultadomultiplicacion)

// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    
    function saludarPersonalizado(nombre, apellido)
    {
        return "Hola," + nombre + apellido;
    }

    console.log(saludarPersonalizado('Amani', ' Molinas'));


// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    function calcularPotencia(base, exponente) {
        return Math.pow(base, exponente);  // Usamos Math.pow() para elevar la base al exponente
    }
    console.log(calcularPotencia(2,2))

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    function restar (a,b) {
        return a-b
    }
    const resultado2 = restar (10,2)
    console.log(resultado2);

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    function dividir (numero1, numero2) {
        return numero1 / numero2 
    }

    const resultado3 = dividir(10,2)
    console.log(resultado3);

// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `funcionMultiplicar`.
    const funcionMultiplicar = function (a, b) {
        return a * b;
    }
    console.log(funcionMultiplicar(4, 5));

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    const saludar= function (nombre) {
        return "Hola," + nombre;
    }
    console.log(saludar("Amani"));

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    const esPar= function (numero) {
        if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
    }
    console.log(esPar(4));

// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    const multiplicarFlecha = (a,b) => {
        return a * b;
    }
    console.log(multiplicarFlecha(3, 4));

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    // Tu código aquí
    const saludarFlecha = (nombre) => {
        return "Hola," + nombre;

    }
    console.log(saludarFlecha("Araceli"));

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
    const calcularArea = radio => {
         return Math.PI * Math.pow(radio, 2);
    }
    console.log(calcularArea(5));

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
    function suma(n) {
        let total = 0;
        for (let i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    }

    console.log(suma(3));


// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
    function fibonacci(n) {
            // Caso base: fibonacci(0) es 0 y fibonacci(1) es 1
            if (n === 0) {
                return 0;
            }
            if (n === 1) {
                return 1;
            }
            // Caso recursivo: fibonacci(n) es la suma de los dos números anteriores
            return fibonacci(n - 1) + fibonacci(n - 2);
    }
    console.log(fibonacci(4));


// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
    function factorial(n) {
      // Condición base: Si el número es 0 o 1, devolvemos 1 y no llamamos a la función de nuevo
    if (n === 0 || n === 1) {
        return 1;
      } else {
        // Si el número es mayor que 1, llamamos a la función
        return n * factorial(n - 1);
      }
    }
    console.log(factorial(4));

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
    function potencia(base, exponente) {
        // Caso base: cualquier número elevado a 0 es 1
        if (exponente === 0) {
            return 1;
        } else {
        // Caso recursivo: base^exponente es base * base^(exponente-1)
        return base * potencia(base, exponente - 1); 
        }
    }
    console.log(potencia(2,3));


    despedir ();
    multiplicarPorDos();
    esMayorDeEdad();
    multiplicar();
    saludarPersonalizado();
    calcularPotencia();
    restar();
    dividir();
    funcionMultiplicar();
    saludar();
    esPar();
    multiplicarFlecha();
    saludarFlecha();
    calcularArea();
    suma();
    fibonacci();
    factorial();
    potencia();
    
   

// Exportar las funciones para que puedan ser probadas
module.exports = {

    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    funcionMultiplicar,
    saludar,
    esPar,
    multiplicarFlecha,
    saludarFlecha,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
};