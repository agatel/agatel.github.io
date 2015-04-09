window.onload = start;

function start(){
    'use strict';
    var WIDGET_ID = '#weather-widget';
    var WIDGET_JQUERY_ID = '#weather-widget-jquery';
    var weatherWidget = new WeatherWidget(WIDGET_ID);
    var weatherWidgetJquery = new WeatherWidget(WIDGET_JQUERY_ID, true);
}