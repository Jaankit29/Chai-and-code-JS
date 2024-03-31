# Project related to DOM

## Project link ## [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 - "Color hanger"

```javascript
// chaiaurcode.js

const buttons= document.querySelectorAll('.button')
// console.log(buttons)
const body= document.querySelector('body')

buttons.forEach(function(button){
//console.log(button);
button.addEventListener('click', function(e){
   console.log(e);
   console.log(e.target)
  if(e.target.id ==='grey'){
    body.style.backgroundColor= e.target.id;
  }
  if(e.target.id ==='pink'){
    body.style.backgroundColor= e.target.id;
  }
  if(e.target.id ==='blue'){
    body.style.backgroundColor= e.target.id;
  }
  if(e.target.id ==='yellow'){
    body.style.backgroundColor= e.target.id;
  }
  if(e.target.id ==='purple'){
    body.style.backgroundColor= e.target.id;
  }
})
})

```

```html
 <!-- index.html -->

 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a  
      > -->
      <h1>Color switching code</h1>
      <span class="button" id="blue"></span>
      <span class="button" id="pink"></span>
      <span class="button" id="grey"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

```css
 /* style.css */

html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#pink {
  background: pink;
}
#blue {
  background: blue;
}
#yellow {
  background-color: yellow;
}
#purple {
  /* color: purple; */
  background: purple;
}
```
## Project 2 -BMI Generator

```javascript
// chaiaurcode.js

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const suggest= document.querySelector('#suggestion')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight/ (height/100)**2).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi < 18.6){
      suggest.innerHTML= "U r under weight"
    }
   else if(bmi > 24.9){
      suggest.innerHTML= "U r over weight"
    }
    else suggest.innerHTML= "U r fit"
  }
});

```
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="suggestion"></div>

        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>

```
```css
/* style.css */
.container {
  width: 575px;
  height: 825px;

  background-color: #5991be;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

#suggestion {
  font-size: 25px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(94, 4, 4);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}
```

## Project 3 - Digital clock

```javascript
const clock= document.getElementById('clock')

// let date= new Date()
// console.log(date.toLocaleTimeString())      
// clock.innerHTML=date.toLocaleTimeString()  

setInterval(function(){
  let date= new Date()
//console.log(date.toLocaleTimeString())      
clock.innerHTML=date.toLocaleTimeString() 
}, 1000)
```

## Project 4 - Guess the number

```javascript


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```
## Project 6 - Changing BG color
```javascript

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    // console.log(Math.floor(Math.random() * 16));
    // console.log(color);
  }
  return color;
};

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
  // console.log(randomColor());
}

let intervalId;
const startChangingColor = function () {
  if (!intervalId) { //or intervalId==null
    intervalId = setInterval(changeBgColor, 1000); 
    console.log(randomColor());
  }
// //******** wrong approach *************
// //  if (!intervalId) { //or intervalId==null
//    intervalId = setInterval(changeBgColor, 1000);
//    console.log(randomColor());
// //  }
};
const stopChangeColor= function(){
  clearInterval(intervalId);
  intervalId=null;
}


//console.log(randomColor())
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);
```
