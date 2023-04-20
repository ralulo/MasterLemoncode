console.log("************** DELIVERABLE 02 *********************");

 let errorArray ="El argumento de la funcion debe ser del tipo array";
 const arrayA   = ["a","b","c"];
 const arrayB = [5,10,5];
 const arrayD = [1,2,3,4,5,6,7,8,9,10];
 const arrayC= ["pepe","juan","sebas"];


//Ejercicio Concat
const concat = (array1, array2) => {
    let resultado;
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        resultado = errorArray;
    }else
    {
        let arrayResult = [...array1,...array2];
        resultado = arrayResult;
    }
   return resultado;
}; 

console.log("Prueba Concat")
console.log(concat(arrayA,arrayB));

//Concat opcional

const concatMultiple = (...arg) => {
let respuesta;
let arrayTotal = [];
for (let index = 0; index < arg.length; index++) {
    if (!Array.isArray(arg[index])) 
    {
        respuesta = errorArray;
    }
    const element = arg[index];
    arrayTotal= [...arrayTotal,...element];
    respuesta = arrayTotal; 

}
return respuesta;

} 

console.log("Prueba Concat Multiple");
console.log(concatMultiple(arrayA,arrayB,arrayC,arrayD));
