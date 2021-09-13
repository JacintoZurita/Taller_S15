//variables primitivas>>

let nombre = "Jacinto"
//let nombre = null
let apellido = "Zurita"
let edad = 32
let estado = true

//Constantes>>
//Arreglos>>
const numeros = [1,2,3,4,5,6,7];

//Objetos>>
const articulos = {
    descripcion:'coca cola',
    precio: 2,
    stock: 10000
}
const notas = [
    {nombre:"Dan",
    promedio: 100,
    parciales:[
        {primer: [25,35]},
        {segundo: [15,25]}
    ]
},
    {nombre:"Yady",
    promedio: 60,
    parciales:[
        {primer: [15,15]},
        {segundo: [15,15]}
    ]
    },

    {nombre:"Erick",
    promedio: 100,
    parciales:[
        {primer: [25,35]},
        {segundo: [15,25]}
    ]
},
]

articulos.precio = 30
articulos.estado= true
//console.log("Articulo",articulos,articulos.descripcion,articulos.precio,articulos.estado);
//console.log(notas);
console.log(notas[0]);

//if condiciones

/* if (nombre)
    console.log("nombre:",nombre, "edad:", edad)
else
console.log("No ha ingresado nombre: " ,nombre) */


//if forma horizontal
/* let resp = (nombre==null) ? "No se ha crado la variable" :nombre
    console.log(resp) */

// articulo.precio=30
// articulo.estado= true
// console.log("Articulo =>", articulo, articulo.descripcion,articulo.precio,articulo.estado)

// console.log(notas[1])
// console.log(notas[1].nombre)
// console.log(notas[1].parciales)
// console.log(notas[1].parciales[1])
// console.log(notas[1].parciales[1].segundo)
// console.log(notas[1].parciales[1].segundo[1])

///Switch, case>>
day = 3
switch (day){
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    default:
        console.log("Día no valido")
        break
    
}    
let x=20
let y=0
try {
    if (y==0)
        throw ("Divicion no permitida para cero")
    let resp = x/y
    console.log(resp)
}catch (error){
    console.log("Error con y=0",error)
}

//Ciclo While>>

const numbers = [3,45,55,20,10,85,7]
let pos=0
while (pos< numbers.length && numbers[pos]!=10){
    console.log(pos,"[",numbers[pos],"]")
    pos +=1
}
console.log("Fin del ciclo While")

//Ciclo For>>
for (let ind=0; ind< numbers.length ; ind+=2){
    console.log(ind,"[",numbers[ind],"]")
}
//Ciclo For ascendente>>
console.log("Ciclo For con recorrido de atras para adelante")
for (let ind= numbers.length-1 ;ind>=0; ind-=1){
    console.log(ind,"[",numbers[ind],"]")
}


//Funcion Suma>>
console.log("Función Suma")
function suma(){
    let num1=13
    let num2=31
    console.log("La suma de",num1,"+",num2,"=", num1+num2);
}
suma() 

//Función Multiplicación>>
console.log("Función Multiplicación")
function multiplicacion(num1,num2){
    return num1*num2
}
console.log("El resultado de la multiplicación es: ",multiplicacion(5,6))
multiplicar()

//Función multiplicar>>
function multiplicar (num1=2,num2=9){
    num1 = (num1)? num1:0
    num2 = (num2)? num2:0
    return num1*num2
}
console.log(multiplicar(4,7))

//Función Resta>>
function resta(n1,n2){
    return n1-n2
}
console.log("El resultado de la resta es:", resta(5,3))

//Función División>>
function division(n1,n2){
    resp = n1 ? n1/n2 : 0
    return resp
}
console.log("El resultado de la división es:", division(8,4))


//Funciones en Funciones Flechas>>
const sumar =() => {
    let num1=13
    let num2=31
    console.log(`Suma: ${num1}+${num2}= ${num1+num2}`);
}
sumar()
//Función Flecha, Multiplicación>>
const multiplicarr =(num1=2,num2=9) =>{
    num1 = (num1)? num1:0
    num2 = (num2)? num2:0
    return num1*num2
}
console.log("El resultado de la multiplicación es =>", multiplicarr())

//Función Flecha, Resta>>
const restar = (n1,n2)=> n1-n2
    console.log(restar(5,2))

//Función Flecha, División>>
const divisionn = (n1,n2)=> n2 ? n1/n2 : 0
    console.log(divisionn(8,2));

