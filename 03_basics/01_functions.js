function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage("Ankit"))

function girlfriend(name ){
     return `${name} is my gf`
}

//console.log(girlfriend()) // if I don't provide any default value in parameter and do not provide any argument then the output will be "undefined is my gf"

function calculatePrice(num1) {
    return num1
}
//console.log(calculatePrice(1,2,3,4)) // o/p -> 1

function calculatePrice_1(...num1) { // ... is a rest opertot
    return num1
}
//console.log(calculatePrice_1(1,2,3,4)) // o/p -> array [ 1, 2, 3, 4 ]

function calculatePrice_2(val1, val2, ...num1) { // ... is a rest opertot
    return num1
}
//console.log(calculatePrice_2(1,2,3,4)) //o/p -> [ 3, 4 ] , becoz we are returning only num1, and parameters are val1, val2, ...num1, in arguments (1,2,3,4) val1 is 1,  val2 is 2, and rest all 3,4 goes in ...num1

const user={
    name:"nitin",
    age: 23
}
function handleObj(anyObj){
    console.log(`Name is ${anyObj.name} and age is ${anyObj.age}`)
}

//andleObj(user)
handleObj(
    {
        name: "Ankit",
        Age: 22
    }
)

const myNewArr=[100,200, 300,400]

function return2ndval(anyArr){
    return anyArr[2]
}
console.log(return2ndval(myNewArr))
console.log(return2ndval([6,8,22,99]))