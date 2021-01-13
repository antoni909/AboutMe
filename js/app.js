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

// var userNameResponse = prompt('Hello and Welcome to my page! What is your name?');
// var userName = userNameResponse.toLowerCase();
// console.log(userName);

// //Here I create the the subsequent prompt questions and positive confirmation to the user

// // NOTE TO THE TA GRADING: I have added console.log after calling the function to pass Linter errors

// // Question 1
// function questionOne() {

//   var initialResponse = prompt('Hello ' + userName + ', I will ask you five Yes or No questions, is that okay?');
//   var userResponse = initialResponse.toLowerCase();
//   if(userResponse === 'yes') {
//     // return console.log('That is amazing, ' + userName + ' ! Let\'s begin then :D');
//     return alert('That is amazing, ' + userName + ' ! Let\'s begin then :D');
//   }else {
//     return alert('It looks like you dont want to continue, ' + userName + ', but I will force you to answer Yes or No questions against your will');
//   }
// }
// var responseOne = questionOne();
// console.log(responseOne);

// // Question 2
// function questionTwo() {

//   var userResp = prompt('Do I live in the Pacific Northwest of the United States of \'Murica?');
//   var userResponse = userResp.toLowerCase();
//   if(userResponse === 'yes'){
//     // return console.log('Great answer ' + userName +'!');
//     return alert('Great answer ' + userName +'!');
//   }else {
//     return alert( userName + ', you might want to rethink that, refresh the page and try again');
//   }
// }
// var responseTwo = questionTwo();
// console.log(responseTwo);

// // Question 3
// function questionThree() {

//   var userResp = prompt( userName +', Am I enrolled in Code Fellows 201 Fundumentals of Software Development?');
//   var userResponse = userResp.toLowerCase();

//   if(userResponse === 'yes'){
//     // return console.log(''Great Job! I am enrolled into the 201 coure'');
//     return alert('Great Job! I am enrolled into the 201 coure');
//   }else {
//     return alert('No? ' + userName + ', I am in fact enrolled into the 201 course');
//   }
// }
// var responseThree = questionThree();
// console.log(responseThree);

// // Question 4
// function questionFour() {

//   var userResp = prompt('Will I be enrolling into Code Fellows 301 after this 201 course?');
//   var userResponse = userResp.toLowerCase();

//   if(userResponse === 'yes'){
//     // return console.log('That\'s awesome ' + userName + ', I am ready to get the ball rolling on the 301 course!');
//     return alert('That\'s awesome ' + userName + ', I am ready to get the ball rolling on the 301 course!');
//   }else {
//     return alert('Im sorry to say you are wrong, ' + userName + ', but I am most definately going to enroll into the 301 course' );
//   }
// }
// var responseFour = questionFour();
// console.log(responseFour);

// // Question 5
// function questionFive() {

//   var userResp = prompt('Will I enroll into the 401 course at Code Fellows in the near future?');
//   var userResponse = userResp.toLowerCase();

//   if(userResponse === 'yes'){
//     // return console.log('I will most definately enroll into the 401 Advanced Software Development in Full-Stack JavaScript course');
//     return alert('I will most definately enroll into the 401 Advanced Software Development in Full-Stack JavaScript course');
//   }else {
//     return alert(' You are wrong ' + userName + ', I am in fact going to enroll into the 401 course' );
//   }
// }
// var responseFive = questionFive();
// console.log(responseFive);

// var endMessage = alert('thank you for answering my questions,  ' + userName + ', have a great rest of your day!');
// console.log(endMessage);
