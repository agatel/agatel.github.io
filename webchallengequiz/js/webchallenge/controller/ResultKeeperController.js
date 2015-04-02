function ResultKeeperController(resultsData) {
    var history = [];

    function addToHistory(element){
        history.push(element);
    }

    function getResultData() {
        console.log('ResultKeeperController : history : ', history);
        var data;
        for (var i = 0; i < resultsData.length; i++) {
            var results = resultsData[i];
            if (isContainsHistory(results.history)) {
                data = results;
                break;
            }
        }
        return data;
    }

    function isContainsHistory(data) {
        var hasHistory = false;
        if (data[0].constructor === Array) {
            for (var i = 0; i < data.length; i++) {
                if (isEqualArrays(data[i], history)) {
                    hasHistory = true;
                    break;
                }
            }
        } else {
            hasHistory = isEqualArrays(data, history);
        }
        return hasHistory;
    }

    function isEqualArrays(array1, array2) {
        return array1.length == array2.length
            && array1.every(function (element, index) {
                return element === array2[index];
            });
    }

    return {
        addToHistory : addToHistory,
        getResultData : getResultData
    }
}
