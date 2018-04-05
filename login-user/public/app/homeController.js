(function() {
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('homeController', homeController)

    homeController.$inject = ['$location','$rootScope'];

    function homeController($rootScope) {
        activate();
        function activate() {
            $rootScope.titulo1 = 'Home';
            $rootScope.titulo2 = 'página principal del sistema';
        };
    }
})();