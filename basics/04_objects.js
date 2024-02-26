//const tinder= new Object()  // singleton object
const tinderUser= {}

tinderUser.id= "123abc"
tinderUser.name= "Ankit"
tinderUser.isLoggedIn= false

//console.log(tinderUser)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

 //console.log(regularUser.fullname?.userfullname.firstname);

 const obj1= {1: "a", 2: "b"}
 const obj2= {3:"a", 4:"b"}
 //const obj3={ obj1, obj2}

// const obj3= Object.assign( obj1, obj2)
const obj3={...obj1,  ...obj2}
// console.log(obj3)
 //console.log(obj1===obj3)

 const users=[
    {
    id:1,
    email:"a@gmail.con"
    },
    {
        id:2,
        email:"b@gmail.con"
        },
        {
            id:3,
            email:"c@gmail.con"
            },
 ]
 //console.log(users)

//  console.log(Object.keys(tinderUser))
//  console.log(Object.values(tinderUser))
//  console.log(typeof Object.entries(tinderUser))
//  console.log(tinderUser.hasOwnProperty('name '))

// de-structure Objects
const course={
    coursename: "js hindi",
    price: "100",
    courseInstructor: "Ankit"
}

const {courseInstructor: ins} = course

//console.log(courseInstructor)
console.log(ins )