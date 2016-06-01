var app;
(function (app) {
    angular.module('myApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ngMaterial', 'ngMessages'])
        .controller('formController', app.formController)
        .directive('progressbar', function () {
        return {
            restrict: 'EAC',
            scope: {
                dynamic: "="
            },
            templateUrl: 'element/jade-blocks/progress.html',
        };
    })
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('form', {
            url: '/form/steps/one',
            templateUrl: 'element/jade-blocks/form.html',
            controller: 'formController'
        })
            .state('form-2', {
            url: '/form/steps/two',
            templateUrl: 'element/jade-blocks/form-2.html',
            controller: 'formController',
            onEnter: function () {
                setTimeout(function () {
                    $('#status-buttons a').eq(0).html('<i class="fa fa-check" aria-hidden="true"></i>').addClass('active');
                }, 0);
            },
            onExit: function () {
                setTimeout(function () {
                    $('#status-buttons a').eq(0).html('<span>1</span>');
                }, 0);
            }
        });
        $urlRouterProvider.otherwise('/form/steps/one');
    });
})(app || (app = {}));
