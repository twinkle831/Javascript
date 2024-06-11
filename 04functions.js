// ... is both spread and rest operator 
//it is used to pass multiple values in a function 
function calcCart(...num1){
    return num1 
}

console.log(calcCart(200,400,500,2000));
//without ... operator it only prints 200 but here it prints whole array 


//can also pass objects as arguments 

//SCOPES 
//var will print value even outside of the scope it is declared , so use let 

//closure : CHILD FUNCTION CAN ACCESS PARENT'S VARIABLES 

//HOISTING : 
//you cannot access function before declaration in this way : 
/* 
addTwo(5)
const addTwo = function(num){
    return num+2
}


but can in this way 

addOne(5)

function addOne(num){
    return num+1
}
    */


