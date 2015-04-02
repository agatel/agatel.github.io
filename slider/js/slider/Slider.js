function Slider(container, output, range){
    var SLIDER_BG_CLASS = 'slider-bg',
        SLIDER_PROGRESS_CLASS = 'slider-progress',
        SLIDER_POINTER = 'slider-pointer';

    var sliderBackground,
        sliderProgress,
        sliderPointer;

    function start(){
        createBackgroundBar();
        createProgressBar();
        createPointer();
        initialize();
        addListeners();
    }

    function createBackgroundBar() {
        sliderBackground = document.createElement('div');
        sliderBackground.className = SLIDER_BG_CLASS;
        sliderBackground.style.width = '100%';
        sliderBackground.style.height = '100%';
        sliderBackground.style.cursor = 'pointer';
        container.appendChild(sliderBackground);
    }

    function createProgressBar() {
        sliderProgress = document.createElement('div');
        sliderProgress.className = SLIDER_PROGRESS_CLASS;
        sliderProgress.style.position = 'relative';
        sliderProgress.style.boxSizing = 'border-box';
        sliderProgress.style.width = '0';
        sliderProgress.style.height = '60%';
        sliderProgress.style.top = '-80%';
        sliderProgress.style.cursor = 'pointer';
        container.appendChild(sliderProgress);
    }

    function createPointer(){
        sliderPointer = document.createElement('div');
        sliderPointer.className = SLIDER_POINTER;
        sliderPointer.style.position = 'relative';
        sliderPointer.style.boxSizing = 'border-box';
        sliderPointer.style.height = '140%';
        sliderPointer.style.cursor = 'pointer';
        container.appendChild(sliderPointer);
    }

    function initialize(){
        initPointer();
        setPointer(0);
    }

    function initPointer(){
        var difference = sliderPointer.offsetTop - container.offsetTop;
        var offset = (sliderPointer.offsetHeight - container.offsetHeight) / 2;
        var shift = difference + offset;
        var topPositionInPercents = shift / container.offsetHeight * 100;
        sliderPointer.style.top = '-' + topPositionInPercents + '%';
        sliderPointer.style.width = sliderPointer.offsetWidth || '50px';
    }

    function setPointer(position){
        var containerWidth = Number(container.offsetWidth);
        var pointerTarget = Number(sliderPointer.offsetWidth / 2);
        var pointerPosition = Number(position) - pointerTarget + 'px';
        var chosenRatio = position / containerWidth;
        var outputValue = Math.floor(range * chosenRatio);
        var progressPosition = containerWidth * chosenRatio + 'px';
        sliderPointer.style.left = pointerPosition;
        sliderProgress.style.width = progressPosition;
        output.value = outputValue;
    }

    function addListeners(){
        container.addEventListener('click', onValueChosen);
        sliderPointer.addEventListener('mousedown', onStartDragging);
    }

    function onValueChosen(event){
        if(getMouseTarget(event) != sliderPointer) {
            setPointer(getMousePosition(event));
        }
    }

    function getMouseTarget(event){
        var mouseTarget;
        event = getMouseEvent(event);
        if(event.target) {
            mouseTarget = event.target;
        } else if(event.srcElement) {
            mouseTarget = event.srcElement;
        }
        return mouseTarget;
    }

    function getMouseEvent(event){
        if(!event) {
            event = window.event;
        }
        return event;
    }

    function getMousePosition(event){
        var mouseX,
            eventX;
        event = getMouseEvent(event);
        eventX = event.pageX || event.x || event.clientX;
        mouseX = Number(eventX) - Number(container.offsetLeft);
        mouseX = Math.min(Math.max(mouseX, 0), container.offsetWidth);
        return mouseX;
    }

    function onStartDragging() {
        document.addEventListener('mousemove', onDragging);
        document.addEventListener('mouseup', onEndDragging);
    }

    function onDragging(event){
        setPointer(getMousePosition(event));
    }

    function onEndDragging(){
        document.removeEventListener('mousemove', onDragging);
        document.removeEventListener('mouseup', onEndDragging);
    }

    start();
    return {
    }
}