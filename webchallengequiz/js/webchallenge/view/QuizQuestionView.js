function QuizQuestionView(element){
    var INFO_ID = 'quiz-question',
        ANSWERS_ID = 'quiz-answers',
        BUTTON_TYPE = 'button',
        BUTTON_STYLE_ID = 'quiz-button';

    var dispatcher = Dispatcher.getInstance(),
        info = element.getElementsByClassName(INFO_ID)[0],
        answers = element.getElementsByClassName(ANSWERS_ID)[0],
        buttons = [];

    function setData(data){
        reset();
        setInfo(data.question);
        setButtons(data.options);
    }

    function show(){
        element.style.display = 'block';
    }

    function hide(){
        element.style.display = 'none';
    }

    function enable(){
        for(var i = 0; i < buttons.length; i++){
            var buttonElement = buttons[i];
            buttonElement.disabled = false;
        }
    }

    function disable(){
        for(var i = 0; i < buttons.length; i++){
            var buttonElement = buttons[i];
            buttonElement.disabled = true;
        }
    }

    function reset(){
        answers.innerHTML = '';
    }

    function setInfo(text){
        setText(info, text);
    }

    function setButtons(data){
        buttons = [];
        for(var i = 0; i < data.length; i++){
            var buttonData = data[i];
            var buttonElement = document.createElement(BUTTON_TYPE);
            buttonElement.type = BUTTON_TYPE;
            buttonElement.className = BUTTON_STYLE_ID;
            setText(buttonElement, buttonData.value);
            buttonElement.onclick = function(id, bind){
                return function(){onAnswerChosen({id : id, bind : bind});}
            }(i, buttonData.bind);
            answers.appendChild(buttonElement);
            buttons.push(buttonElement);
        }
    }

    function setText(element, text){
        element.innerText = text;
        element.textContent = text;
    }

    function onAnswerChosen(data) {
        dispatcher.publish(QuizEvent.ANSWER_CHOSEN, data);
    }

    return {
        setData : setData,
        show : show,
        hide : hide,
        enable : enable,
        disable : disable
    };
}