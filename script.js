
var questions = [
     {
           prompt: "Commonly used data types DO NOT include\n(a) Strings\n\ (b) booleans\n(c) alerts",
           answer: "c"
     },
     {
          prompt: "The condition in an if / else statement is enclosed within ____.\n(a) Quotes\n\ (b) Curly Brackets\n(c) Paranthesis",
          answer: "c"
     },
     {
          prompt: "Arrays in Javascript can be used to store ____.\n(a) Numbers and strings\n\ (b) Booleans\n\ (c) Other arrays\n\ (d) All the above",
          answer: "d"
     }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);


