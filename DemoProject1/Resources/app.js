(function () {
    'use strict';

    angular.module('app', [
        // Angular modules 
        'ngRoute'

        // Custom modules 

        // 3rd Party Modules

    ])
    .run(function ($rootScope) {
        $rootScope.goIbiboAppId = 'dbe3aa46';
        $rootScope.goIbiboAppKey = 'd6d7531361c073cae07e94091b89dfcf';
        $rootScope.APIUrl = "http://developer.goibibo.com/api/";
        $rootScope.Responceformat = 'json';
        $rootScope.ResponceRounter = "100";
    });
    //.directive('asDate', function () {
    //    return {
    //        require: 'ngModel',
    //        link: function (scope, element, attrs, modelCtrl) {
    //            modelCtrl.$formatters.push(function (input) {
    //                var transformedInput;
    //                if (input) transformedInput = new Date(input);
    //                else transformedInput = new Date();
    //                if (transformedInput !== input) {
    //                    modelCtrl.$setViewValue(transformedInput);
    //                    modelCtrl.$render();
    //                }
    //                return transformedInput;
    //            });
    //        }
    //    };
    //});
})();