(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('TravellersApp', ['ngRoute']).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/Views/Index',
                controller: 'HomeController'
            });

        $locationProvider.html5Mode(true);
    }

})();