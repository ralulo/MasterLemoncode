console.log("************** DELIVERABLE 01 *********************");

//Creamos el objeto de error para el ejercicio y evitar repetir codigo
export{}
const errorArray ="El argumento de la funcion debe ser del tipo array";
let arrayPrueba = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//Ejercicio head
const head = (arrayObject) => {
    let resultado;
    if (!Array.isArray(arrayObject)) {
        resultado = errorArray;
      } else {
        const [result] = arrayObject;
        resultado = result;
        
      }
      return resultado;
};


//Ejercicio Tail
const tail = (arrayObject) => {

    let resultado;
    if (!Array.isArray(arrayObject)) {
        resultado = errorArray;
      } else {
        let [c,...element] = arrayObject;
        resultado = element;
      }
      return resultado;


}; 

//ejercicio Init
const init =(arrayObject) =>{
    let resultado;
    if (!Array.isArray(arrayObject)) 
    {
        resultado = errorArray;
    } else
    {
    let arrayResult = arrayObject.slice(0,-1) 
    resultado = arrayResult

}
    return resultado;
    }
    



//Ejercicio Last
const last = (arrayObject) => {
    let resultado;
    if (!Array.isArray(arrayObject)) 
    {
        resultado = errorArray;
    } else
    {
        let arrayResult = [...arrayObject];  
        resultado = arrayResult.pop();
    }
    return resultado;

}; 

console.log("Prueba Head");
console.log(head(arrayPrueba));
console.log("Prueba Tail");
console.log(tail(arrayPrueba));
console.log("Prueba Init");
console.log(init(arrayPrueba));
console.log("Prueba Last");
console.log(last(arrayPrueba));
console.log("Array Original");
console.log(arrayPrueba);


