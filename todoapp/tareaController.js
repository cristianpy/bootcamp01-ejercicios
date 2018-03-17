(function(){
    'use strict';

    angular
        .module('todoApp')
        .controller('tareaController', tareaController)
        tareaController.$inject = ['$scope'];

        function tareaController($scope) {
            $scope.nuevaTarea = {};
            
            $scope.tareas = [
                {descripcion: "Pasear al perro"},
                {descripcion: "Pagar factura ande"},
                {descripcion: "Enfriar gaseosa"},
            ]

            $scope.agregarTarea = function() {
                //console.log($scope.nuevaTarea.descripcion);
                var nuevaLinea = angular.copy($scope.nuevaTarea);
                $scope.tareas.push(nuevaLinea);
                //limpiar variable
                $scope.nuevaTarea = {};
            }
        }
})();