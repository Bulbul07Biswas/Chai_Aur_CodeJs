//Datatype- Premetive and Nonpremetive
//Premetive -call by value means jab bhi hum koi value kahi se copy karte hai toh iske orignl data ka refrnce nahi dia jata
// and jo bhi changes hote hai copied value mai hote hai.
//7 type String,Number,boolean,null,undefined,symbol,BigInt

//koi bh null value ka datatype object hota hai and undefined ka undefind hi rhta hai
//symbol value ko uniqueness deta hai ex,
// let id= Symbol('123')
// let newId= Symbol('123')
// console.log(id===newId);
// console.log(typeof id);
// let newData= String(id)
// console.log(typeof newData);
// console.log(newData);

//bigInt Ex
let bigNumber=454645645776567n
console.log(bigNumber);
console.log(typeof bigNumber);

//Nonpremetive(Reference Datatype)
//Array,Object,Funtion
const hero =['shaktiman','Dora','Krish'] //Array
console.log(hero);
console.log(typeof hero);

let myObj={ 

    name: "bulbul",     //This is an Object
    age:33,
    profession: 'IT Engineer'
}
console.log(myObj);
console.log(typeof myObj);

const myFunction= function(){            //function defination- function(){}

console.log('Hello World');


}              
console.log(typeof myFunction);