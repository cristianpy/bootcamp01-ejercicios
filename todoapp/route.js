(function() {
    'use strict';

    angular
        .module('gdgAdmin')
        .config(routeConfig)
    
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
        .state('home', {url: '/home', templateUrl: 'home.html', controller: 'homeController'})
        .state('eventos', {url: '/eventos', templateUrl: 'eventos.html', controller: 'eventosController'})
        .state('eventos-form', {url: '/eventos-form', templateUrl: 'eventos-form.html', controller: 'eventosFormController'})
        .state('eventos-edit', {url: '/eventos-edit/:id', templateUrl: 'eventos-form.html', controller: 'eventosFormEditController'});
    }
}());