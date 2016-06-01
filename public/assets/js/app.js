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
            onEnter: function () {
                $('.progress-bar').css({ 'width': '0%' });
            },
            onExit: function () {
                $('.progress-bar').css({ 'width': '100%' });
            }
        })
            .state('form-2', {
            url: '/form/steps/two',
            templateUrl: 'element/jade-blocks/form-2.html',
            onEnter: function () {
                setTimeout(function () {
                    $('#status-buttons a').eq(0).addClass('active').html('<i class="fa fa-check" aria-hidden="true"></i>');
                }, 0);
                $('.progress-bar').css({ 'width': '100%' });
            },
            onExit: function () {
                setTimeout(function () {
                    $('#status-buttons a').eq(0).html('<span>1</span>');
                }, 0);
                $('.progress-bar').css({ 'width': '0%' });
            }
        });
        $urlRouterProvider.otherwise('/form/steps/one');
    });
})(app || (app = {}));
