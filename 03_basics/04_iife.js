// Immediately Invoked Function Expression
// IIFE is a JS function that runs as soon as it is defined.
// It is a design which is also known as a "Self-Execution Anonymous Function" and contains two major parts:-
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
// 
(function chai(){  // named iife
    console.log(`DB connected`)
})
();  // this ; (semicolon) is must for writing another iife

((name) => {
    console.log(`${name} connected db`)
}) ("Ntin");    //;
 
(() => {
    // some initiation code
    let firstVariable=34;
    let secondVariable;
    console.log("I'm 3rd IIFE")
  })();
  //console.log(firstVariable) //  ReferenceError: firstVariable is not defined