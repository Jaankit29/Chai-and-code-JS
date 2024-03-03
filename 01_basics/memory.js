// Primitive datatype:- String, Number, Boolean , null , undefined, Symbol, Bigint
// Non-primitive:- Array, Objects, Functions 

// Stack , Heap

// Stack (Primitive), heap (Non-primitive)
 
let  me= "Ankit"
let you= me
you="Nitin"
// console.log(you)
// console.log(me)

const user1={
    name: "Kirti",
    id: "k@gmail.com"
}

const user2= user1;
user2.id="Ankit2gmail.com"
console.log(user1)
console.log(user2)