//IMMEDIATELY INVOKED FUNCTION EXPRESSION 
/* we want some functios to be invoked immediately and we dont want function to be polluted by global scope 


*/

//NAMED IFFE -has name chai 
(function chai(){
    console.log("DB CONNECTED")
})(); //always end with semi colon 

//FIRST BRACKET FOR DECLARATION, SECOND TO CALL 
((name) => {
    console.log(`YO ${name}`);
}
) ('eminem')