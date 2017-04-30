(function () {
    'use strict';

    angular
        .module('app')
        .factory('flightfactory', flightfactory);

    flightfactory.$inject = ['$http', '$rootScope'];

    function flightfactory($http, $rootScope) {
        var service = {
            getData: getData,
            getFlights: getFlights
        };

        return service;

        function getData() {
            //alert($rootScope.goIbiboAppKey);
        }
        function getFlights(data) {
            var sampledepdate = "20170501";
            var sampledateofarrival = "20170502";
            var requestUrl = $rootScope.APIUrl + "search/" + "?app_id=" + $rootScope.goIbiboAppId + "&app_key=" + $rootScope.goIbiboAppKey + "&format=" + $rootScope.Responceformat + "&source=" + data.flSource + "&destination=" + data.flDestination + "&dateofdeparture=" + sampledepdate + "&dateofarrival=" + sampledateofarrival + "&seatingclass=E&adults=" + data.flAdults + "&children=0&infants=0&counter=100";
            return $http.get(requestUrl);
            //return $http.get($rootScope.APIUrl + "?app_id=" + $rootScope.goIbiboAppId + "&app_key=" + $rootScope.goIbiboAppKey + "&format=" + $rootScope.Responceformat + "&source=" + data.flSource + "&destination=" + data.flDestination + "&dateofdeparture=" + sampledepdate + "&dateofarrival=" + sampledateofarrival + "&seatingclass=E&adults=1&children=0&infants=0&counter=100")
        }
    }
})();