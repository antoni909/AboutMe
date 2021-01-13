/*

JS INSTRUCTIONS ARE AS FOLLOWS:
- js file must contain 'use strict' declaration
- js must be linked to html file as an externel script file
- make sure all code is clean
- correct indentation and syntax

JS CODE INSTRUCTIONS:
-x Prompt User 5x with Y/N questions
- Consisder case sensitivity by normalizing user input (.  toUpperCase or .toLowerCase)
- Alert the user if they answered the question correctly or not
- Add console.log() messages within app to notify if they are correct.
- Comment out these console.logs for submission
- Replace console.logs with alerts() to complete the project

*/

'use strict';

//Here I create an initial prompt question to capture the users name and use it in subsequent prompts

var userName = prompt('Hello and Welcome to my page! What is your name?');
console.log(userName);

//Here I create the the subsequent prompt questions and positive confirmation to the user

// Question 1
function questionOne() {

  var initialResponse = prompt('Hello ' + userName + '!!! Welcome to my page, I will ask you five yes or no questions, is that okay?');
 
  if(initialResponse === 'yes') {
    return alert('That is amazing, ' + userName + ' ! Let\'s begin then :D');
  }else {
    return alert('It looks like you dont want to continue, ' + userName + ', thank you for visiting my page');
  }
}
var responseOne = questionOne();

// Question 2
function questionTwo() {

  var userResp = prompt('Respond Yes or No to question 01: is the sky blue?');

  if(userResp === 'yes'){
    return alert('Great answer ' + userName +'!');
  }else {
    return alert( userName + ', you might want to rethink that, refresh the page and try again');
  }
}
var responseTwo = questionTwo();

// Question 3
function questionThree() {

  var userResp = prompt( userName +', Are you currently enrolled in Code Fellows 201?');

  if(userResp === 'yes'){
    return alert('Me too! I am excited to get this course going and getting a good grasp on the fundumentals of JavaScript and HTML/CSS');
  }else {
    return alert('No? ' + userName + ', you might want to talk to admissions then, thank you for visiting');
  }
}
var responseThree = questionThree();

// Question 4
function questionFour() {

  var userResp = prompt('Will you be enrolling into Code Fellows 301 after this 201 coure?');

  if(userResp === 'yes'){
    return alert('That\'s great to hear ' + userName + ', I am also planning on doing the same!');
  }else {
    return alert('I\'m sure you have a reason for your decision, ' + userName + ', best of luck to you.' );
  }
}
var responseFour = questionFour();

// Question 5
function questionFive() {

  var userResp = prompt('What about the 401 advanced course, are you planning on taking one of them in the near future?');

  if(userResp === 'yes'){
    return alert('Me too! I am thinking about taking Advanced Software Development in Full-Stack JavaScript');
  }else {
    return alert('Either way ' + userName + ', I am more than positive you have a bright future ahead of you' );
  }
}
var responseFive = questionFive();
