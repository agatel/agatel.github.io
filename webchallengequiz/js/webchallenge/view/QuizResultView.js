function QuizResultView(element){
    var INFO_ID = 'result-info';

    var info = element.getElementsByClassName(INFO_ID)[0];

    function setData(data){
        setInfo(data.message);
    }

    function show(){
        element.style.display = 'block';
    }

    function hide(){
        element.style.display = 'none';
    }

    function setInfo(text){
        setText(info, text);
    }

    function setText(element, text){
        element.innerText = text;
        element.textContent = text;
    }

    return {
        setData : setData,
        show : show,
        hide : hide
    };
}