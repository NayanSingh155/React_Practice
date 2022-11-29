// prev code
// function sum(a,b){
//     if(typeof a==="string"&&typeof b==="string"){
//         return 
//     }
//     console.log("in sum function");
//     return a + b;
// }
// module.exports = sum;


// password validator
// min 8 char
//  at least 1 small case character
//  at least  1 capital letter character
// at least 1 number character
// TDD :test driven development
const validate =(pass)=>{
    let flag=true;
    let lower = "abcdefghijklmnopqrstuvwxyz"
    if(pass.length<8){
        flag=false;
    }
return (flag)
}
module.exports=validate;