(function () {
    'use strict';

    angular
        .module('app')
        .controller('fligthsdetailcontroller', fligthsdetailcontroller);

    fligthsdetailcontroller.$inject = ['$scope','$rootScope']; 

    function fligthsdetailcontroller($scope, $rootScope) {
        $scope.title = 'fligthsdetailcontroller';
        debugger;
        $scope.SearchedFlights = $rootScope.SearchFligthData;
        activate();

        function activate() {
            $("#flight-details").addClass("active");
        }
    }
})();
