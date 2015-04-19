window.onload = function start(){
    'use strict';
    var BOX_ITEM_ID = '#box-item',
        MOVEMENT_RANGE = 150;
    var speedX = getRandomSpeed(),
        speedY = getRandomSpeed(),
        boxAnimation = new BoxAnimation(BOX_ITEM_ID, MOVEMENT_RANGE, speedX, speedY);

    function getRandomSpeed(){
        var MIN_SPEED = 2,
            MAX_SPEED = 10;
        return Math.round(Math.random() * (MAX_SPEED - MIN_SPEED)) + MIN_SPEED;
    }

    boxAnimation.start();
} ;