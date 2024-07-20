let score=null
console.log(score);

let IsNumber= Number(score)
console.log(typeof IsNumber);
console.log(IsNumber)

let score1=undefined
console.log(score1);

let IsNumber1= Number(score1)
console.log(typeof IsNumber1)
console.log(IsNumber1)

let score2= ""
console.log(score2);

let IsNumber2= Number(score2)
console.log(typeof IsNumber2);
console.log(IsNumber2)

let score3 = false
console.log(score3)

let IsNumber3= Number(score3)
console.log(typeof score3)
console.log(IsNumber3)

let score4 = 1
let IsNumber4 = Boolean(score4)
console.log(typeof IsNumber4)
console.log(IsNumber4)


let value5= "Bulbul"
let IsNumber5 = Number(value5)
console.log(typeof IsNumber5);
console.log(IsNumber5)

let IsloggeedIn ="Bulbul"
let checkedLogIn= Boolean(IsloggeedIn)
console.log(checkedLogIn)
console.log(typeof checkedLogIn)

let num= 45
let change= String(num)
console.log(change);
console.log(typeof change);

/* When we convert this
"33"->33
"33abc"->Nan
True->1; False->0 
"Bulbul"->True*/


//****************Operations***********//
// let val =7
// console.log(-val);
// console.log(3+6+"5"); /*In js fist value type treated(i.e. 3)
// as number and then added in 6 nd "5" is string so 3+6=9 +"5"=95* and same vice verca*/
// console.log("2"+1+7);
let gameCounter=100
++gameCounter
console.log(gameCounter);

//Prefix and postfix 
let x=4
let y=x--
console.log('value of x' , x,'value of y',y)
