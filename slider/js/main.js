window.onload = start;

function start() {
    var RESPONSIVE_SLIDER_ID = 'responsive_slider',
        SAFE_SLIDER_ID = 'safe_slider',
        INFORMATION_SLIDER_ID = 'information_slider',
        SLIDER_ID = 'slider',
        SLIDER_OUTPUT_ID = 'slider-output',
        SLIDER_RANGE = 150;

    console.clear();

    var responsiveSliderContainer = document.getElementById(RESPONSIVE_SLIDER_ID);
    var responsiveSliderElement = responsiveSliderContainer.getElementsByClassName(SLIDER_ID)[0];
    var responsiveSliderOutput = responsiveSliderContainer.getElementsByClassName(SLIDER_OUTPUT_ID)[0];
    var responsiveSlider = new Slider(responsiveSliderElement, responsiveSliderOutput, SLIDER_RANGE);

    var safeSliderElementContainer = document.getElementById(SAFE_SLIDER_ID);
    var safeSliderElement = safeSliderElementContainer.getElementsByClassName(SLIDER_ID)[0];
    var safeSliderOutput = safeSliderElementContainer.getElementsByClassName(SLIDER_OUTPUT_ID)[0];
    var safeSlider = new Slider(safeSliderElement, safeSliderOutput, SLIDER_RANGE);

    var informationSliderContainer = document.getElementById(INFORMATION_SLIDER_ID);
    var informationSliderElement = informationSliderContainer.getElementsByClassName(SLIDER_ID)[0];
    var informationSliderOutput = informationSliderContainer.getElementsByClassName(SLIDER_OUTPUT_ID)[0];
    var informationSlider = new Slider(informationSliderElement, informationSliderOutput, SLIDER_RANGE);
}