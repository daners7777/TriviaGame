//JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function() {

//defined variables
var timer;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var intervalId;





function Question (question,choices,answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
    this.DisplayQuestion = function () {
        return this.question;
    }

}     

var questions = [
    new Question( "Which war movie won the Academy Award for Best Picture in 2009?",
    ["Saving Private Ryan", "The Hurt Locker", "Platoon", "Full Metal Jacket"],
    "The Hurt Locker"),

    new Question( "What was the name of the second Indiana Jones movie, released in 1984?",
    ["Indiana Jones and the Temple of Doom", "Goldeneye", "Raiders of the Lost Ark", "Running Scared"],
    "Indiana Jones and the Temple of Doom",),

    new Question( "Who directed the epic historical drama Schindler's List in 1993?",
    ["Ron Howard", "Danny Boyle", "Steven Spielberg", "George Lucas"],
    "Steven Spielberg",),

    new Question( "In which movie did Julia Roberts play a kind-hearted prostitute called Vivian Ward?",
    ["Annie Hall", "Pretty Woman", "Chinatown", "Runaway Bride"],
    "Pretty Woman",),

    new Question( "Which 1952 musical comedy tells the story of three performers making the transition from silent movies to 'talkies'?",
    ["Singin' in the Rain", "My Fair Lady", "Sound of Music", "Grease"],
    "Singin' in the Rain",),

    new Question( "Who played Jack Dawson in the 1997 epic Titanic?",
    ["George Clooney", "Leonardo DiCaprio", "Matt Damon", "Charlie Cox"],
    "Leonardo DiCaprio",),

    new Question( "Which classic thriller movie stars Roy Schieder as the police chief Martin Brody",
    ["The Sting", "Jaws", "Rear Window", "North by Northwest"],
    "Jaws",),

    new Question( "Which English director was responsible for the epic movie Gladiator in 2000?",
    ["Christopher Nolan", "Guy Ritchie", "Ridley Scott", "Terry Gilliam"],
    "Ridley Scott",),

    new Question( "In which 1984 science fiction movie did Linda Hamilton play the role of Sarah Connor",
    ["Robocop", "Blade Runner", "E.T.", "The Terminator"],
    "The Terminator",),

    new Question( "Which English actor won the 2014 Academy Award for best actor for his role in The Theory of Everything?",
    ["Christian Bale", "Daniel Craig", "Ralph Fiennes", "Eddie Redmayne"],
    "Eddie Redmayne",)

];

$("#start").on("click", function() {
    AddQuestions();
    AddTimer();
    
});


function AddTimer() {
    timer = 5;
    $('#timer').text(timer);
    clearInterval(intervalId);
    intervalId = setInterval(decrementTimer, 1000);
};

function decrementTimer() {
    timer--;
    if (timer === 0) {
        stopTimer();   
    
    }
    $('#timer').text(timer);
    
    
};

function stopTimer() {
    clearInterval(intervalId);
    
};



function AddQuestions () {
    $("#start-screen").hide()
    for (var i = 0; i < questions.length; i++) {
        $("#questions-box").append($("<h4>"+questions[i].question+"<h4>"))
        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#questions-box").append($("<input type='radio' class='radio-button'value='"+questions[i].choices[j]+"'name='question-"+i+"'>"+questions[i].choices[j]+"<br>"))
            //console.log(document.getElementById("questions-box").innerHTML);
        }
    }
}



   

// if ($('input[question-0]:checked')
// .length > 0) {

// }




    // $.each($("input[name='question-0']:checked"),function() {
    //     if($(this).val()==question[0].answer){
    //         correct++;
    //     } else {
    //         incorrect++;
    //     }
    });


// function CheckAnswer() {
//     if ("radio-button")==[0]
//     for (var i = 0; i < questions.length; i++)
//     corect++;
    








// var question = {
//     question,
//     choices,
//     answer,
//     DisplayQuestion: function () {
//         return this.question;
//     }
    
// }




// function question() {
//     document.getElementById("questions-box").innerHTML = questions.DisplayQuestion();
// }



//Array of trivia questions
//    var questions = [{
//         question: "Which war movie won the Academy Award for Best Picture in 2009?",
//         choices: ["Saving Private Ryan", "The Hurt Locker", "Platoon", "Full Metal Jacket"],
//         answer: "The Hurt Locker",
// },
//     {
//         question: "What was the name of the second Indiana Jones movie, released in 1984?",
//         choices: ["Indiana Jones and the Temple of Doom", "Goldeneye", "Raiders of the Lost Ark", "Running Scared"],
//         answer: "Indiana Jones and the Temple of Doom",
//     },
//     {
//         question: "Who directed the epic historical drama Schindler's List in 1993?",
//         choices: ["Ron Howard", "Danny Boyle", "Steven Spielberg", "George Lucas"],
//         answer: "Steven Spielberg",
//     },
//     {
//         question: "In which movie did Julia Roberts play a kind-hearted prostitute called Vivian Ward?",
//         choices: ["Annie Hall", "Pretty Woman", "Chinatown", "Runaway Bride"],
//         answer: "Pretty Woman",
//     },
//     {
//         question: "Which 1952 musical comedy tells the story of three performers making the transition from silent movies to 'talkies'?",
//         choices: ["Singin' in the Rain", "My Fair Lady", "Sound of Music", "Grease"],
//         answer: "Singin' in the Rain",
//     },
//     {
//         question: "Who played Jack Dawson in the 1997 epic Titanic?",
//         choices: ["George Clooney", "Leonardo DiCaprio", "Matt Damon", "Charlie Cox"],
//         answer: "Leonardo DiCaprio",
//     },
//     {
//         question: "Which classic thriller movie stars Roy Schieder as the police chief Martin Brody",
//         choices: ["The Sting", "Jaws", "Rear Window", "North by Northwest"],
//         answer: "Jaws",
//     },
//     {
//         question: "Which English director was responsible for the epic movie Gladiator in 2000?",
//         choices: ["Christopher Nolan", "Guy Ritchie", "Ridley Scott", "Terry Gilliam"],
//         answer: "Ridley Scott",
//     },
//     {
//         question: "In which 1984 science fiction movie did Linda Hamilton play the role of Sarah Connor",
//         choices: ["Robocop", "Blade Runner", "E.T.", "The Terminator"],
//         answer: "The Terminator",
//     },
//     {
//         question: "Which English actor won the 2014 Academy Award for best actor for his role in The Theory of Everything?",
//         choices: ["Christian Bale", "Daniel Craig", "Ralph Fiennes", "Eddie Redmayne"],
//         answer: "Eddie Redmayne",
//     }];

// function AddQuestions () {
//     $("#start-screen").hide()
//     for (var i = 0; i < questions.length; i++) {
//         $("#questions-box").append($("<h4>"+questions[i].question+"<h4>"))
//         for (var j = 0; j < questions[i].choices.length; j++) {
//             $("#questions-box").append($("<input type='radio' class='radio-button'value='"+questions[i].choices[j]+"'name='question-"+i+"'>"+questions[i].choices[j]+"<br>"))
//         }
//     }

// }



// var questions = new Array ();
// questions[0] = new Question( "Which war movie won the Academy Award for Best Picture in 2009?",
// ["Saving Private Ryan", "The Hurt Locker", "Platoon", "Full Metal Jacket"],
// "The Hurt Locker");
// questions[1] = new Question("What was the name of the second Indiana Jones movie, released in 1984?",
// ["Indiana Jones and the Temple of Doom", "Goldeneye", "Raiders of the Lost Ark", "Running Scared"],
// "Indiana Jones and the Temple of Doom",)