const user ={
    username: "Ankit",
    price: 100,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my home`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Nitin"
// user.welcomeMessage()

// console.log(this) // empty object

// function chai(){
//     let username= "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai2= function(){
//     let name="Ankit"
//     console.log(this.name)
// }
// chai2();

const chai3= () =>{
    let name="Ankit"
    console.log(this)
}
//chai3()

// const addTwo= (a,b) =>{
//    return a+b; 
// }    // if we use {} then we will have to write return statement

// const addTwo= (a,b) => a+b; // or can use () ex:- (a+b) then there is no need to write return statement
 
// const addTwo= (a,b) => (a+b)

// const addTwo= (a,b) => {name: "Ankit"} // undefined

const addTwo= (a,b) => ({name: "Ankit"})

console.log(addTwo(4,4))