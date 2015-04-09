window.onload = function start(){
    'use strict';
    var BOX_ITEM_ID = '#box-item',
        MOVEMENT_RANGE = 150;
    var speedX = getRandomSpeed(),
        speedY = getRandomSpeed(),
        boxAnimation = new BoxAnimation(BOX_ITEM_ID, MOVEMENT_RANGE, speedX, speedY);

    function getRandomSpeed(){
        return Math.round(Math.random() * 8) + 2;
    }

    boxAnimation.start();
} ;