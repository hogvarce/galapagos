module app {
    angular.module('myApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ngMaterial', 'ngMessages'])
    .controller('formController', formController)
    .directive('progressbar', function (): ng.IDirective{
        return {
            restrict: 'EAC',
            scope: {
                dynamic: "="
            },
            templateUrl: 'element/jade-blocks/progress.html',
        }
    })
    .config((
         $stateProvider: ng.ui.IStateProvider,
         $urlRouterProvider: ng.ui.IUrlRouterProvider,
         $locationProvider) => {
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
                    onEnter: ()=>{
                        setTimeout(
                            ()=>{
                                $('#status-buttons a').eq(0).html('<i class="fa fa-check" aria-hidden="true"></i>').addClass('active');
                            }, 0
                        );
                    },
                    onExit: ()=>{
                        setTimeout(
                            ()=>{
                                $('#status-buttons a').eq(0).html('<span>1</span>');
                            }, 0
                        );
                    }
                });

            $urlRouterProvider.otherwise('/form/steps/one');

    });
}
