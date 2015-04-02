window.onload = start;

function start(){
    var quiz = new QuizController(QuizData);
    quiz.start();
}