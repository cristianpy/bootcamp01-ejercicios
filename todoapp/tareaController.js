(function(){
    'use strict';

    angular
        .module('todoApp')
        .controller('tareaController', tareaController)
        tareaController.$inject = ['$scope'];

        function tareaController($scope) {
            $scope.tareas = [
                {descripcion: "Pasear al perro"},
                {descripcion: "Pagar factura ande"},
                {descripcion: "Enfriar gaseosa"},
            ]
        }
})();