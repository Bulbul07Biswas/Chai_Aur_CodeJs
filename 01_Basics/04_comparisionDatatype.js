console.log(null>0) //print false
console.log(null==0)//print false
console.log(null>=0) //print true -reason is that the equality check== and comarison operator  >,<,>=,<= work diffrntly
//bcz in comparison operator null value convert to an number treated as 0 and in euality it act as empty value


// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined>=0)

// === means strict check that checks the value inclue its data type
console.log("2"===2);//print false bcz "2" is string and 2 is num and in == it checks only value