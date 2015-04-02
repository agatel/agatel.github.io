function QuizController(quizData){
    var QUIZ_ID = 'quiz',
        RESULT_ID = 'result';

    var dispatcher = Dispatcher.getInstance(),
        questionElement = document.getElementById(QUIZ_ID),
        questionsData = quizData.questions,
        question = new QuizQuestionView(questionElement),
        resultElement = document.getElementById(RESULT_ID),
        result = new QuizResultView(resultElement),
        resultKeeper = new ResultKeeperController(quizData.results);

    function start(){
        init();
        addListeners();
        setQuestion(QuizData.DEFAULT_QUESTION_ID);
    }

    function init(){
        question.show();
        result.hide();
    }

    function addListeners(){
        dispatcher.subscribe(QuizEvent.ANSWER_CHOSEN, onAnswerChosen)
    }

    function onAnswerChosen(data){
        var chosenId = Number(data.id) + 1;
        var chosenBind = data.bind;
        question.disable();
        resultKeeper.addToHistory(chosenId);
        if(chosenBind == QuizData.BIND_TO_RESULT) {
            showResult();
        }else {
            setQuestion(chosenBind)
        }
    }

    function setQuestion(id){
        var data = getQuestionData(id);
        question.setData(data);
        question.enable();
    }

    function getQuestionData(id){
        var data;
        for(var i = 0; i < questionsData.length; i++){
            if(questionsData[i].id == id){
                data = questionsData[i];
                break;
            }
        }
        return data;
    }

    function showResult(){
        var data = resultKeeper.getResultData();
        result.setData(data);
        result.show();
        question.hide();
    }

    return {
        start : start
    };
}