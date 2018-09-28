//JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function () {
    
    $("#submit").hide();

    //defined variables
    var timer;
    var correct = 0;
    var incorrect = 0;
    var intervalId;

    //Function for questions, choices and answers
    function Question(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
        this.DisplayQuestion = function () {
            return this.question;
        }
    }
    
    //Object containing questions, choices and answer
    var questions = [
        new Question("Which war movie won the Academy Award for Best Picture in 2009?",
            ["Saving Private Ryan", "The Hurt Locker", "Platoon", "Full Metal Jacket"],
            "The Hurt Locker"),

        new Question("What was the name of the second Indiana Jones movie, released in 1984?",
            ["Indiana Jones and the Temple of Doom", "Goldeneye", "Raiders of the Lost Ark", "Running Scared"],
            "Indiana Jones and the Temple of Doom"),

        new Question("Who directed the epic historical drama Schindler's List in 1993?",
            ["Ron Howard", "Danny Boyle", "Steven Spielberg", "George Lucas"],
            "Steven Spielberg"),

        new Question("In which movie did Julia Roberts play a kind-hearted prostitute called Vivian Ward?",
            ["Annie Hall", "Pretty Woman", "Chinatown", "Runaway Bride"],
            "Pretty Woman"),

        new Question("Which 1952 musical comedy tells the story of three performers making the transition from silent movies to 'talkies'?",
            ["Singin` in the Rain", "My Fair Lady", "Sound of Music", "Grease"],
            "Singin` in the Rain"),

        new Question("Who played Jack Dawson in the 1997 epic Titanic?",
            ["George Clooney", "Leonardo DiCaprio", "Matt Damon", "Charlie Cox"],
            "Leonardo DiCaprio"),

        new Question("Which classic thriller movie stars Roy Schieder as the police chief Martin Brody",
            ["The Sting", "Jaws", "Rear Window", "North by Northwest"],
            "Jaws"),

        new Question("Which English director was responsible for the epic movie Gladiator in 2000?",
            ["Christopher Nolan", "Guy Ritchie", "Ridley Scott", "Terry Gilliam"],
            "Ridley Scott"),

        new Question("In which 1984 science fiction movie did Linda Hamilton play the role of Sarah Connor",
            ["Robocop", "Blade Runner", "E.T.", "The Terminator"],
            "The Terminator"),

        new Question("Which English actor won the 2014 Academy Award for best actor for his role in The Theory of Everything?",
            ["Christian Bale", "Daniel Craig", "Ralph Fiennes", "Eddie Redmayne"],
            "Eddie Redmayne")

    ];

    // This .on("click") function will trigger the start game
    $("#start").on("click", function () {
        ShowQuestions();
        ShowTimer();
        $("#submit").show();
        $(".score").hide();
    });

    // This .on("click") function will trigger submitting game
    $("#submit").on("click", function () {
        FinalScore();
        $("#start-screen").show();
        $("#timer").hide();
        clearInterval(intervalId);
        $("#new-game").show();
    });   

    // This .on("click") function will trigger a new game
    $("#new-game").on("click", function () {
        $("#timer").show();
        $("#submit").show();
        $(".score").hide();
        correct = 0;
        incorrect = 0;
        ShowTimer();
        $( ".radio-button" ).prop( "checked", false );
        $("#start-screen").hide();
    });

   
    //Function to create the timer
    function ShowTimer() {
        timer = 30;
        $("#timer").text(timer);
        clearInterval(intervalId);
        intervalId = setInterval(DecreaseTimer, 1000);
    };

    //Function to decrease the timer
    function DecreaseTimer() {
        timer--;
        if (timer === 0) {
            StopTimer();
        }

        $("#timer").text(timer);
    };

    //Function to stop timer at zero
    function StopTimer() {
        clearInterval(intervalId);
        FinalScore();
        $("#start-screen").show();
        $("#timer").hide();
        $("#new-game").show();
    };

    //Add the questions to the HTML div queston box looping through all questions
    function ShowQuestions() {
        $("#start-screen").hide()
        for (var i = 0; i < questions.length; i++) {
            $("#questions-box").append($("<h4>" + questions[i].question + "<h4>"))
            for (var j = 0; j < questions[i].choices.length; j++) {
                $("#questions-box").append($("<input type='radio' class='radio-button'value='" + 
                questions[i].choices[j] + "'name='question-" + i + "'>" + questions[i].choices[j] + "<br>"))
                $("#timer").show();
                }
            }   
        }
        //Add to the amount of correct or incorrect to get final score
        function FinalScore() {
            for (var i = 0; i < questions.length; i++) {
                $.each($("input[name='question-" + i + "']:checked"), function () {
                    var questionInput = $(this).attr("value");
                    if (questionInput === questions[i].answer) {
                        correct++;
                    } else {
                        incorrect++;
                    }
                });   
            
        //Displays everything on screen - correct, incorrect, etc.        
        $(".btn, .btn-primary, .btn-lg, .round").hide();
        $("span#correct").text(correct);
        $("span#incorrect").text(incorrect);
        $(".score").show();
        $("#start").hide();
        };
    }
});
