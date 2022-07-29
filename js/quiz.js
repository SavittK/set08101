var images = {
    "ChinaFlag"  : "images/ChinaFlagQ1.png",
    "FranceFlag" : "images/FranceFlagQ1.png",
    "GermanFlag" : "images/GermanFlagQ1.jpg",
    "JapanFlag"   : "images/JapanFlagQ1.png",
    "KoreaFlag"   : "images/KoreaFlagQ1.png",
    "RussiaFlag"   : "images/RussiaFlagQ1.png",
    "SaudiaFlag"   : "images/SaudiaArabiaFlagQ1.png",
    "SpainFlag"   : "images/SpainFlagQ1.png",
    "UKFlag"   : "images/UKFlagQ1.png",
    "ChinaFood"   : "images/ChinaFoodQ2.jpg",
    "FranceFood"   : "images/FranceFoodQ2.jpg",
    "GermanFood"   : "images/GermanFoodQ2.jpg",
    "JapanFood"   : "images/JapanFoodQ2.jpg",
    "KoreaFood"   : "images/KoreaFoodQ2.jpg",
    "RussiaFood"   : "images/RussiaFoodQ2.jpg",
    "SaudiaArabiaFood"   : "images/SaudiaArabiaFoodQ2.jpg",
    "SpainFood"   : "images/SpainFoodQ2.jpg",
    "UKFood"   : "images/UKFoodQ2.jpg",
    "ChinaScenery"   : "images/ChinaSceneryQ3.jpg",
    "FranceScenery"   : "images/FranceSceneryQ3.jpg",
    "GermanyScenery"   : "images/GermanySceneryQ3.jpg",
    "JapanScenery"   : "images/JapanSceneryQ3.jpg",
    "KoreaScenery"   : "images/KoreaSceneryQ3.jpg",
    "RussiaScenery"   : "images/RussiaSceneryQ3.jpg",
    "SaudiaArabiaScenery"   : "images/SaudiaArabiaSceneryQ3.jpg",
    "SpainScenery"   : "images/SpainSceneryQ3.jpg",
    "UKScenery"   : "images/UKSceneryQ3.jpg",
    "ChinaLifestyle"   : "images/ChinaLifestyleQ4.jpg",
    "FranceLifestyle"   : "images/FranceLifestyleQ4.jpg",
    "GermanyLifestyle"   : "images/GermanyLifestyleQ4.jpg",
    "JapanLifestyle"   : "images/JapanLifestyleQ4.jpg",
    "KoreaLifestyle"   : "images/KoreaLifestyleQ4.jpg",
    "RuissiaLifestyle"   : "images/RuissiaLifestyleQ4.jpg",
    "SaudiaArabiaLifestyle"   : "images/SaudiaArabiaLifestyleQ4.jpg",
    "SpainLifestyle"   : "images/SpainLifestyleQ4.jpg",
    "UKLifestyle"   : "images/UKLifestyleQ4.jpg"
    
    }  
    function populate() {
    if (quiz.isEnded()) {
    showScores();
    } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    
    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
    var element = document.getElementById("choice" + i);
    element.innerHTML = images[choices[i]]? '<img src="'+images[choices[i]]+'"/>':choices[i];
    guess("btn" + i, choices[i]);
    }
    
    showProgress();
    }
    };
    
    function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
    quiz.guess(guess);
    populate();
    }
    };
    
    function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    };
    
    function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2> <br> <a id='result-text' href='results.html'>View Result</a>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    };
    
    // create questions
    var questions = [
    new Question("Which language are you most familiar with?", ["ChinaFlag", "FranceFlag", "GermanFlag", "JapanFlag", "KoreaFlag", "RussiaFlag", "SaudiaFlag", "SpainFlag", "UKFlag"], "UKFlag"),
    new Question("What type of food do you enjoy?", ["ChinaFood", "FranceFood", "GermanFood", "JapanFood", "KoreaFood", "RussiaFood", "SaudiaArabiaFood", "SpainFood","UKFood"], "UKFood"),
    new Question("What type of food do you enjoy?", ["ChinaScenery", "FranceScenery", "GermanyScenery",  "JapanScenery", "KoreaScenery", "RussiaScenery", "SaudiaArabiaScenery", "SpainScenery", "UKScenery"], "UKScenery"),
    new Question("What type of food do you enjoy?", ["ChinaLifestyle", "FranceLifestyle", "GermanyLifestyle",  "JapanLifestyle", "KoreaLifestyle", "RuissiaLifestyle", "SaudiaArabiaLifestyle", "SpainLifestyle", "UKLifestyle"], "UKLifestyle")
    ];
    
    function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    }
    
    Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
    }
    
    
    function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    }
    
    Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
    }
    
    Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
    }
    
    this.questionIndex++;
    }
    
    Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
    }
    
    // create quiz
    var quiz = new Quiz(questions);
    
    // display quiz
    populate();



var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');

link.rel = 'stylesheet';

link.type = 'text/css';

