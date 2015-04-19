function BoxAnimation(selection, movementRange, speedX, speedY){
    'use strict';
    var UPDATE_INTERVAL = 40;
    var view,
        renderInterval,
        startX = 0,
        startY = 0,
        width = 0,
        height = 0,
        minLeft = 0,
        minTop = 0,
        maxLeft = 0,
        maxTop = 0;

    function init(){
        view = $(selection);
        startX = parseInt(view.css('left'));
        width = parseInt(view.css('width'));
        minLeft = startX - movementRange;
        maxLeft = startX + movementRange - width;
        startY = parseInt(view.css('top'));
        height = parseInt(view.css('height'));
        minTop = startY - movementRange;
        maxTop = startY + movementRange - height;
    }

    function start(){
        renderInterval = setInterval(render, UPDATE_INTERVAL);
    }

    function render(){
        var currentLeft = parseInt(view.css('left'));
        var nextLeft = currentLeft + speedX;
        var currentTop = parseInt(view.css('top'));
        var nextTop = currentTop + speedY;
        view.css('left', nextLeft + 'px');
        view.css('top', nextTop + 'px');
        if(nextLeft < minLeft || nextLeft > maxLeft){
            speedX = -speedX;
        }
        if(nextTop < minTop || nextTop > maxTop){
            speedY = -speedY;
        }
    }

    init();
    return{
        start: start
    };
}