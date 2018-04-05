(function() {
    'use strict';

    angular
        .module('gdgAdmin')
        .config(routeConfig)
    
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
        .state('home', {url: '/home', templateUrl: 'home.html', controller: 'homeController'})
        .state('login', {url: '/login', templateUrl: 'login/login-form.html', controller: 'loginController'});
    }
}());