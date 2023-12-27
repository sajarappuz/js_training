// let array = ['apple','banana','mango'];

// for(i=0;i<array.length;i++){
//     console.log(array[i])
// }

// let array1 = [{fruit:"apple"},{fruit:"banana"},{fruit:"mango"}];
// for (i of array1){
//     console.log(i.fruit)
// }

let object = {fruit1:"apple",fruit2:"banana" ,fruit3:"mango"};
Object.values(object).map((value)=>{
   
    console.log(value);
})