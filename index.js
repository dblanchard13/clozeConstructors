// I know it seems silly to worry about indentation, but consistency there can make your code more visaully appealing as well as easier to parse
var inquirer = require('inquirer');
var fs = require('fs');

var basicCardArray = [];

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;

};

// the cloze card should only take two arguments - the `full` and `answer` and then you determine 
// what the cloze partial would be by replacing the answer in the full text with ellipsis (...) or something of the sort.
// full.replace(answer, '...')
var ClozeCard = function(full, answer, cloze) {
	this.full = full;
	this.answer = answer;
  this.cloze = full.replace(answer, '...');
};  

if (process.argv[2] === "basic") {

	basicFunction();

// I think you might have meant to use an `else if` here...
} else if (process.argv[2] === "cloze") {

	clozeFunction();

};

// also, it'd be nice to tell the user you were expecting an argument of either 'basic' or 'cloze' so they don't have to dig into the code to figure that out
// you could keep the if/else if train going by using an `else` statement that outputs the command line input options.
// Alternatively, you could use the inquirer prompt for it. No worries either way since these would all fall under the 'nice to haves' category.

function basicFunction () {
    inquirer.prompt([
      {
      	type:"input",
        name: "front",
        message: "What is the question?"
      },

      {
      	type: "input",
        name: "back",
        message: "What is the answer?"
      } 
    ]).then(function(answers) {
     
      var basic = new BasicCard(
        answers.front,
        answers.back);
   
      fs.appendFile("basic.txt", JSON.stringify(basic), function(){
      	console.log(basic);
      });
     
    });
};

function clozeFunction () {
    
    inquirer.prompt([
      {
      	type:"input",
        name: "full",
        message: "Enter statement."
      },

      {
      	type: "Input missing word",
        name: "answer",
        message: "What word would like to hide?"
      },

      // {
      // 	type: "input",
      //   name: "cloze",
      //   message: "Input statement minus answer"
      // } 
    ]).then(function(answers) {
     
      var cloze = new ClozeCard(
        answers.full,
        answers.answer,
      	answers.cloze)
   
      fs.appendFile("cloze.txt", JSON.stringify(cloze), function(){
      	console.log(cloze);
      });
     
    });
};    


    