	var inquirer = require('inquirer');
	var fs = require('fs');

	var basicCardArray = [];

	var BasicCard = function(front, back) {
  	this.front = front;
  	this.back = back;

	};

	var ClozeCard = function(full, answer, cloze) {
  	this.full = full;
  	this.answer = answer;
    this.cloze = cloze;
	};  

if (process.argv[2] === "basic") {

	basicFunction();

} if (process.argv[2] === "cloze") {

	clozeFunction();

};

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

      {
      	type: "input",
        name: "cloze",
        message: "Input statement minus answer"
      } 
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


    