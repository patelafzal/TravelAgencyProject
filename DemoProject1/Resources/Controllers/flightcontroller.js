(function () {
    'use strict';

    angular
        .module('app')
        .controller('flightcontroller', flightcontroller);

    flightcontroller.$inject = ['$scope', '$rootScope', 'flightfactory'];

    function flightcontroller($scope, $rootScope, flightfactory) {
        $scope.title = 'flightcontroller';

        activate();
        $scope.fnSearchforFlights = function () {
            //alert("Triggerd");
            flightfactory.getFlights($scope.flight).then(function (data, status) {
                localStorage.setItem("Fligts", JSON.stringify(data.data));
                window.location.href = "/FlightsDetail/Index";
            });
        }
        function activate() {
            $("#home").addClass("active");
            //flightfactory.getData();
        }
    }
})();
