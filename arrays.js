//Recorrer Arreglo>>
const arreglo = [2,45,60,85,10,20]
for (let ind=0; ind<arreglo.length;ind++){
    console.log(`${ind}[${arreglo[ind]}]`)
}

const numeros = [20,40,20,80.50,120]
const alumnos = [
    {nombre: "Mario", n1:20,n2:45}, 
    {nombre: "Maria", n1:50,n2:25},
    {nombre: "Daniel", n1:15,n2:50}, 
    {nombre: "Jacinto", n1:40,n2:40},
    {nombre: "Javier", n1:50,n2:35},
    
]
console.log("alumno =>",alumnos)
for( pos=0;pos<alumnos.length;pos++)
console.log("alumnos =>",alumnos[pos].nombre)

//Uso de forEach>>
const fun = alumno =>{
    pro = alumno.n1+alumno.n2
    console.log("El promedio que tiene el alumno ", alumno.nombre, "es:",pro);
}
alumnos.forEach(fun);

//2 tipos de ForEach>>

alumnos.forEach(item => {
    pro = item.n1+item.n2
    console.log(item.nombre,pro)
})
//Map, retorna un nuevo arreglo>>
const items = alumnos.map(items => {
    prom = (items.n1+items.n2)/2
    return items.nombre
});
console.log(items)

//filter, busca valores del arreglo>>

const itemss = alumnos.filter(itemss => itemss.nombre!="Maria");

//alumnos = [...items]
console.log(itemss)
