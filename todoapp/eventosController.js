(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosController', eventosController)

    eventosController.$inject = ['$scope', 'dataService', '$state'];

    function eventosController($scope, dataService, $state) {

        $scope.eventos = [];

        activate();

        function activate() {
            /*$scope.eventos = [
                {nombre: "Bootcamp01", direccion: "Area 8"},
                {nombre: "Bootcamp02", direccion: "Area 9"},
                {nombre: "Bootcamp03", direccion: "Area 7"},
            ],*/
            $scope.eventos = dataService.getData()
            .then(function(data) {
                $scope.eventos = data;
            });
        }

        $scope.delete = function(id) {
            swal({
                title: "Estas seguro",
                text: "Una vez eliminado, no puede ser recuperado!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((isConfirm) => {
                if (isConfirm) {
                    dataService.deleteEvento(id)
                    .then(function(result) {
                        $state.go($state.current, { },  {reload: true});
                    });
                }
            });
        }

        /*dataService.deleteEvento(id)
        .then(function(result) {
            $state.go('eventos')
        });*/
    }
})();