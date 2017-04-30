(function () {
    'use strict';

    angular
        .module('app')
        .controller('fligthsdetailcontroller', fligthsdetailcontroller);

    fligthsdetailcontroller.$inject = ['$scope','$rootScope']; 

    function fligthsdetailcontroller($scope, $rootScope) {
        $scope.title = 'fligthsdetailcontroller';
        //$scope.SearchedFlights = $rootScope.SearchFligthData;
        $scope.SearchedFlights = JSON.parse(localStorage.getItem("Fligts"));
        activate();

        function activate() {
            $("#flight-details").addClass("active");
        }
    }
})();
