// /*
// JS INSTRUCTIONS ARE AS FOLLOWS:
// - js file must contain 'use strict' declaration
// - js must be linked to html file as an externel script file
// - make sure all code is clean
// - correct indentation and syntax

// JS CODE INSTRUCTIONS:
// -x Prompt User 5x with Y/N questions
// - Consisder case sensitivity by normalizing user input (.  toUpperCase or .toLowerCase)
// - Alert the user if they answered the question correctly or not
// - Add console.log() messages within app to notify if they are correct.
// - Comment out these console.logs for submission
// - Replace console.logs with alerts() to complete the project
// */

'use strict';

// //Here I create an initial prompt question to capture the users name and use it in subsequent prompts

var userName = prompt('Hello and Welcome to my page! What is your name?').toUpperCase();


// Question 1
var userResponse = prompt('Hello ' + userName + ', I will ask you five Yes or No questions, is that okay?').toLowerCase();

function questionOne(){
  if(userResponse === 'yes' || userResponse === 'y') {
    // return console.log('That is amazing, ' + userName + ' ! Let\'s begin then :D');
    alert('That is amazing, ' + userName + ' ! Let\'s begin then :D');
  }else {
    alert('It looks like you dont want to continue, ' + userName + ', but I will still force you to answer Yes or No questions against your will lol');
  }
}
questionOne();

// Question 2
function questionTwo(){
  userResponse = prompt('Do I live in the Pacific Northwest of the United States of \'Murica?');
  
  if(userResponse === 'yes' || userResponse === 'y'){
    // return console.log('Great answer ' + userName +'!');
    alert('Great answer ' + userName +'!');
  }else {
    alert( userName + ', you might want to rethink that, refresh the page and try again');
  }
}
questionTwo();

// Question 3
userResponse = prompt( userName +', Am I enrolled in Code Fellows 201 Fundumentals of Software Development?');

function questionThree(){
  if(userResponse === 'yes' || userResponse === 'y'){
    // return console.log(''Great Job! I am enrolled into the 201 coure'');
    alert('Great Job! I am enrolled into the 201 coure');
  }else {
    alert('No? ' + userName + ', I am in fact enrolled into the 201 course');
  }
}
questionThree();

//Question 4
userResponse = prompt('Will I be enrolling into Code Fellows 301 after this 201 course?');

function questionFour(){
  if(userResponse === 'yes'|| userResponse === 'y'){
    // return console.log('That\'s awesome ' + userName + ', I am ready to get the ball rolling on the 301 course!');
    alert('That\'s awesome ' + userName + ', I am ready to get the ball rolling on the 301 course!');
  }else {
    alert('Im sorry to say you are wrong, ' + userName + ', but I am most definately going to enroll into the 301 course' );
  }
}

questionFour();

// Question 5
userResponse = prompt('Will I enroll into the 401 course at Code Fellows in the near future?');
var alertToUserQuestionFive;

function questionFive(){
  if(userResponse === 'yes'|| userResponse === 'y'){
    // return console.log('I will most definately enroll into the 401 Advanced Software Development in Full-Stack JavaScript course');
    alertToUserQuestionFive = alert('I will most definately enroll into the 401 Advanced Software Development in Full-Stack JavaScript course');
  }else{
    alertToUserQuestionFive = alert(' You are wrong ' + userName + ', I am in fact going to enroll into the 401 course' );
    // console.log(alertToUserQuestionFive);
  }
}
questionFive();

// /*

// Question 6
// -takes in numeric input by prompting the user
// -guess the number between 1 and 10
//   -with alerts that indicate guess is too high/low
// -only has 4 total attempts
// -if all 4 attempts are used up, tell user the correct answer

// */


//Questions 6
userResponse = parseInt(prompt('Im thinking of a number between 1 and 10, what is the number?'));
var numberOfGuesses = 4;
var correctNumber = 7;
var wrongGuesses;

function questionSix(){
  var i;
  for (i=0; i<numberOfGuesses; i++) {
    // console.log('this is i ' + i);
    if(userResponse < correctNumber){
      console.log(userResponse = parseInt(prompt(`${userResponse}, is too low, try again`)));
      // userNumberGuess = prompt(`${userNumberGuess}, is too low`);
    }else if(userResponse > correctNumber){
      console.log(userResponse = parseInt(prompt(`${userResponse}, is too high, try again`)));
      // userNumberGuess = prompt(`${userName} you are right!`);
    }else if(userResponse === correctNumber){
      console.log(alert(`Whoa! ${userName} you guessed correctly!`));
      // var guessAlert = alert(`${userName} you are right!`);
      break;
    }
  }
  if(i === numberOfGuesses){
    wrongGuesses = alert('you have exeeded your four attempts, the answer is 7');
  }
}
questionSix();

// /*
// Here I will create a question that begins the guessing game:(consider using  loop for this question)
// -add a 7th Question that has multiple correct answers in an ARRAY
// -Give user 6 total attempts to guess correct answer
// -Guess ends when:
//   -User guesses correct
//   -User runs out of attempt
// -Display all possible correct answers to User
// Personal Notes:
// -arrayCorrectAnswers.length = 4
// -i --> loops 4 times, therefor i runs 0-->4
// -NOTE: i === the index number of the item in the array NOT some random item in the array
// -so they have to guess the correct animals and the correct order
// -the code below works when reponses are in the array order
// -also responses in revers order are passed as incorrect
// -the code works when responses incorrect stay incorrect
// -score and attempts by user count work
// -code breaks when .toLowerCase is added to userResponseSix
// */


//Question 7
var arrayCorrectAnswers = ['lion', 'tiger', 'bear', 'orca'];
var maxAttempts = 6;
var attemptsMadeCounter = 0;
var correctAnswer = false;

function questionSeven(){
  for(var j=0; j < 6; j++){
    userResponse = prompt(
      `Can you guess one of my favorite animals? 
      You have: ${maxAttempts-attemptsMadeCounter} attempts remaining`);
  
    for(var k=0; k<arrayCorrectAnswers.length; k++){
      if(userResponse === arrayCorrectAnswers[j]) {
        alert(`${userName}, You guessed RIGHT!`);
        correctAnswer = true;
        break;
      }
    }
    if(correctAnswer){
      break;
    }else{
      attemptsMadeCounter++;
      alert(
        `Incorrect! 
        You have: ${5-j} attempts left`);
    }
  }
  alert (
    `Thank you for playing, ${userName}, 
    My favorite animals are: ${arrayCorrectAnswers}
    You have reached the maximum number of allowed attempts: ${attemptsMadeCounter}`);
}
questionSeven();
