console.log("************** DELIVERABLE 03 *********************");

//Ejercicio Clone

function clone(source)
{
    return Object.assign({},source);

}

const objeto = {primer:[1,2,4],second:"asdasd"};

console.log("Ejercicio Clone");
console.log( clone(objeto));


const obj1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
const obj2 = { name: "Luisa", age: 31, married: true };


//ejercicio Merge
function merge_options(source,target){
   let resultado = {};
   for (let item in target) { resultado[item] = target[item]; }
   for (let item in source) { resultado[item] = source[item]; }
   return resultado;
}

console.log("Ejercicio Merge");
console.log(merge_options(obj1,obj2))





