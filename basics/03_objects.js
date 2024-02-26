
const mySym= Symbol("key1")
const JsUser= {
    name : "ankit",
    [mySym]: "mykey1" ,
    age: 18,
    location : "Delhi",
    isSingle: false,
    workOff: ["Mon", "Tue"]
}

// console.log(JsUser.age)
// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser[mySym])

JsUser.age=20
//Object.freeze(JsUser)
JsUser.age=30

//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());