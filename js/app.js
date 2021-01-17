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

// 'use strict';

// //Here I create an initial prompt question to capture the users name and use it in subsequent prompts

var userNameResponse = prompt('Hello and Welcome to my page! What is your name?');
var userName = userNameResponse.toLowerCase();
console.log(userName);

// //Here I create the the subsequent prompt questions and positive confirmation to the user

// // NOTE TO THE TA GRADING: I have added console.log after calling the function to pass Linter errors

// // Question 1

// var initialResponse = prompt('Hello ' + userName + ', I will ask you five Yes or No questions, is that okay?');
// var userResponse = initialResponse.toLowerCase();

// if(userResponse === 'yes') {
//   // return console.log('That is amazing, ' + userName + ' ! Let\'s begin then :D');
//   alert('That is amazing, ' + userName + ' ! Let\'s begin then :D');
// }else {
//   alert('It looks like you dont want to continue, ' + userName + ', but I will force you to answer Yes or No questions against your will');
// }

// // Question 2

// var userResp = prompt('Do I live in the Pacific Northwest of the United States of \'Murica?');
// var userResponseOne = userResp.toLowerCase();
// if(userResponseOne === 'yes'){
//   // return console.log('Great answer ' + userName +'!');
//   alert('Great answer ' + userName +'!');
// }else {
//   alert( userName + ', you might want to rethink that, refresh the page and try again');
// }

// // Question 3

// var userRespTwo = prompt( userName +', Am I enrolled in Code Fellows 201 Fundumentals of Software Development?');
// var userResponseTwo = userRespTwo.toLowerCase();

// if(userResponseTwo === 'yes'){
//   // return console.log(''Great Job! I am enrolled into the 201 coure'');
//   alert('Great Job! I am enrolled into the 201 coure');
// }else {
//   alert('No? ' + userName + ', I am in fact enrolled into the 201 course');
// }

// // Question 4

// var userRespThree = prompt('Will I be enrolling into Code Fellows 301 after this 201 course?');
// var userResponseThree = userRespThree.toLowerCase();

// if(userResponseThree === 'yes'){
//   // return console.log('That\'s awesome ' + userName + ', I am ready to get the ball rolling on the 301 course!');
//   alert('That\'s awesome ' + userName + ', I am ready to get the ball rolling on the 301 course!');
// }else {
//   alert('Im sorry to say you are wrong, ' + userName + ', but I am most definately going to enroll into the 301 course' );
// }

// // Question 5

// var userRespFour = prompt('Will I enroll into the 401 course at Code Fellows in the near future?');
// var userResponseFour = userRespFour.toLowerCase();

// if(userResponseFour === 'yes'){
//   // return console.log('I will most definately enroll into the 401 Advanced Software Development in Full-Stack JavaScript course');
//   alert('I will most definately enroll into the 401 Advanced Software Development in Full-Stack JavaScript course');
// }else {
//   alert(' You are wrong ' + userName + ', I am in fact going to enroll into the 401 course' );
// }

// var endMessage = alert('thank you for answering my questions,  ' + userName + ', have a great rest of your day!');

// var userNumberGuess = parseInt(prompt('Im thinking of a number between 1 and 10, what is the number?'));
// var numberOfGuesses = 4;
// var correctNumber = 7;

// var i;
// for (i=0; i<numberOfGuesses; i++) {
//   // console.log('this is i ' + i);
//   if(userNumberGuess < correctNumber){
//     console.log(userNumberGuess = parseInt(prompt(`${userNumberGuess}, is too low, try again`)));
//     // userNumberGuess = prompt(`${userNumberGuess}, is too low`);
//   }else if(userNumberGuess > correctNumber){
//     console.log(userNumberGuess = parseInt(prompt(`${userNumberGuess}, is too high, try again`)));
//     // userNumberGuess = prompt(`${userName} you are right!`);
//   }else if(userNumberGuess === correctNumber){
//     console.log(alert(`Whoa! ${userName} you guessed correctly!`));
//     // var guessAlert = alert(`${userName} you are right!`);
//     break;
//   }
// }

// if(i === numberOfGuesses){
//   var wrongGuesses = alert('you have exeeded your four attempts, the answer is 7');
// }

var myFavoriteMovies = ['a', 'b', 'c'];
var numberChances = 6;
var attemptsMadeCounter = 0;

var userResponseMovie = prompt(`${userName}, in the prompt, guess what one of my favorite movies is?`).toLowerCase();
console.log(userResponseMovie);

for (var i=0; i<numberChances; i++){

  if(userResponseMovie !== myFavoriteMovies[i]) {

    userResponseMovie = prompt(`try again please ${userName}, ${userResponseMovie} is not correct`);
    console.log(userResponseMovie);
    attemptsMadeCounter ++;

  }else if(myFavoriteMovies[i] === userResponseMovie){
    userResponseMovie = prompt(`You guessed correctly: ${userResponseMovie}, is one of my favorite movies! the correct answers were ${myFavoriteMovies}`);
    console.log(userResponseMovie);
    break;
  }
}
