// Immediate Invoked Function Expression
(function chai(){  // named iife
    console.log(`DB connected`)
})
();

((name) => {
    console.log(`${name} connected db`)
}) ("Ntin");
 