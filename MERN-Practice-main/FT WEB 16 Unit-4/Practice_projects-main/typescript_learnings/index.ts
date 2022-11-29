console.log("TypeScript")

const mYname: string="Anmol";

const mYage: number =12;









//     console.log("hello")

// const myname :string = "Anmol";
// const age :number =21;
// const flag :boolean = false;
// // const arr =[1,2];
// // const arr2 =[...arr,3];
// function add(x:number,y:number):number{
//     return x + y //it should return only numbers
// }
// function add(x:number,y:number):string{
//     return x + y //it should return only string
// }
// let output =add(1,2);

// type User ={
//     username:string;
//     age?:number;
//     isMarried:boolean;
// //adding question mark means it is optional key;
// }
// const obj:User = {
//     username:"masia",
//     age:21,
//     isMarried:true
// }
// interface Pet {
//     name:string;
//     age:number;
//     // interface works same as type
// }
// interface Animal{
//     hasLegs:boolean;
// }
// interface Pet extends Animal{
//     food:string;
// }
// Custom Type 
type Human ={
    hasLegs:boolean;
    veg: boolean;
}
type User ={
    username: string;
    age?:number;
    isMarried:boolean;
    animal:Human;
}
const masai: User ={
    username:"anmol",
    // age:12,
    isMarried:true,
    animal:{ 
        hasLegs:true, 
        veg:false
    }
}
//   ? means optional
interface Pet {
    name:string;
    age?:number;
}
interface Animal {
    noOfLegs:number;
    hasWings:boolean;
}
const Dog :Pet={
    name:"tommy",
    age:3
}
interface Dog extends Animal{
    food:string;
}
// const myDog:Dog={
//     food:"pedigree"
// }
// const mydog2: Dog | Animal={
//     food:"pedigree"
// }
// const myPets :number[]=[1,2,3,4];
const myPets:Pet[]=[{name:"pedigree"},{name:"pedigree"},{name:"pedigree"}]