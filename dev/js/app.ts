module app {
    angular.module('myApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ngMaterial', 'ngMessages'])
    .controller('formController', formController)
    .config((
         $stateProvider: ng.ui.IStateProvider,
         $urlRouterProvider: ng.ui.IUrlRouterProvider,
         $locationProvider) => {
            $stateProvider
                .state('form', {
                    url: '/form/steps/one',
                    templateUrl: 'element/jade-blocks/form.html',
                    onEnter: ()=>{
                        $('.progress-bar').css({'width':'0'});
                    },
                    onExit: ()=>{
                        $('.progress-bar').css({'width':'100%'});
                    }
                })
                .state('form-2', {
                    url: '/form/steps/two',
                    templateUrl: 'element/jade-blocks/form-2.html',
                    onEnter: ()=>{
                        setTimeout(
                            function(){
                                $('#status-buttons a').eq(0).addClass('active').html('<i class="fa fa-check" aria-hidden="true"></i>');
                            },
                         0);
                        $('.progress-bar').css({'width':'100%'});
                    },
                    onExit: ()=>{
                        setTimeout(
                            function(){
                                $('#status-buttons a').eq(0).html('<span>1</span>');
                            },
                         0);
                        $('.progress-bar').css({'width':'0%'})
                    }
                });

            $urlRouterProvider.otherwise('/form/steps/one');

    });
}
