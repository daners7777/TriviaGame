//JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function () {

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
            ["Singin' in the Rain", "My Fair Lady", "Sound of Music", "Grease"],
            "Singin'in the Rain"),

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

    // This .on("click") function will trigger the AJAX Call
    $("#start").on("click", function () {
        AddQuestions();
        AddTimer();

    });

    function AddTimer() {
        timer = 25;
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
        submitGame();
        $("#start-screen").show();
        $('#timer').hide();
    };

    function AddQuestions() {
        $("#start-screen").hide()
        for (var i = 0; i < questions.length; i++) {
            $("#questions-box").append($("<h4>" + questions[i].question + "<h4>"))
            for (var j = 0; j < questions[i].choices.length; j++) {
                $("#questions-box").append($("<input type='radio' class='radio-button'value='" + questions[i].choices[j] + "'name='question-" + i + "'>" + questions[i].choices[j] + "<br>"))
                $('#timer').show();
                $('.results').hide();
                }
            }   
        }

    function submitGame() {
        for (var i = 0; i < questions.length; i++) {
            $.each($("input[name='question-" + i + "']:checked"), function () {
                var userGuess = $(this).attr("value");
                if (userGuess === questions[i].answer) {
                    console.log("you got it right!");
                    correct++;
                } else {
                    console.log("wrong");
                    incorrect++;
                }
                
            });
            
        }
        $(".btn, .btn-primary, .btn-lg, .round").hide();
        $('span#correct').text(correct);
        $('span#incorrect').text(incorrect);
        $('.results').show();
        
    };

});
