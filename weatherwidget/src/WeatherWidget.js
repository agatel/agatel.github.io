function WeatherWidget(widgetSelector, useJqueryRequests){
    'use strict';
    var INFO_ID = '.info',
        INPUT_ID = '.text',
        BUTTON_ID = '.button',
        ENTER_KEY_CODE = 13,
        CITY_PLACE_HOLDER = '{city}',
        REQUEST_TEMPLATE = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_PLACE_HOLDER + '&units=metric',
        GET_REQUEST = 'GET',
        OK_STATUS = 'OK',
        NOT_FOUND_CITY_CODE = '404',
        INFO_PROPERTY_CLASS = 'property',
        INFO_VALUE_CLASS = 'value';

    var widget,
        info,
        input,
        button;

    function start(){
        init();
        addListeners();
    }

    function init(){
        useJqueryRequests = useJqueryRequests || false;
        widget = $(widgetSelector);
        info = $(widget).find($(INFO_ID));
        input = $(widget).find($(INPUT_ID));
        input.val('');
        button = $(widget).find($(BUTTON_ID));
    }

    function addListeners(){
        $(button).on('click', getWeather);
        $(input).keypress(function(event){
            if(event.keyCode === ENTER_KEY_CODE){
                getWeather();
            }
        });
    }

    function getWeather(){
        var city = $(input).val();
        if(city) {
            var requestURL = REQUEST_TEMPLATE.replace(CITY_PLACE_HOLDER, city.toString());
            sendWeatherInfoRequest(requestURL);
        }
    }

    function sendWeatherInfoRequest(requestURL){
        if(useJqueryRequests){
            $.get(requestURL, function(data){
                updateWeather(data);
            });
        }else{
            var request = new XMLHttpRequest();
            request.onload = function(){
                if (this.statusText === OK_STATUS) {
                    updateWeather(this.responseText);
                }
            };
            request.open(GET_REQUEST, requestURL, true);
            request.send();
        }
    }

    function updateWeather(data){
        var weatherData = data instanceof Object ? data : JSON.parse(data);
        var weatherInfo = getWeatherInfo(weatherData);
        $(info).html(weatherInfo);
    }

    function getWeatherInfo(data){
        var info;
        if(data.cod === NOT_FOUND_CITY_CODE){
            info = 'not found the city';
        }else{
            var main = data.main,
                wind = data.wind,
                weather = data.weather[0];
            info = 'The weather in ' + data.name + ' : ' +
                    '<br>' +
                    '<br>' + toProperty('main info : ') + toValue(weather.description) +
                    '<br>' + toProperty('temperature : ') + toValue(main.temp.toFixed(1) + ' &deg;C') +
                    '<br>' + toProperty('humidity : ') + toValue(main.humidity.toFixed(1) + ' %') +
                    '<br>' + toProperty('pressure : ') + toValue(main.pressure.toFixed(1) + ' hpa') +
                    '<br>' + toProperty('wind : ') + toValue(wind.speed.toFixed(1) + ' m/s') +
                    '<br>';
        }
        return info;
    }

    function toValue(data){
        return "<span class='" + INFO_VALUE_CLASS + "'>" + data + "</span>";
    }

    function toProperty(data){
        return "<span class='" + INFO_PROPERTY_CLASS + "'>" + data + "</span>";
    }

    start();
    return{};
}