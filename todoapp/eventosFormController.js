(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosFormController', eventosFormController)

    eventosFormController.$inject = ['$scope', '$state', '$stateParams', 'dataService'];

    function eventosFormController($scope, $state, $stateParams, dataService) {

        console.log($stateParams.id);
        

       $scope.crearEvento = function(evento) {
            console.log(evento);
            
            dataService.save(evento)
            .then(function(result) {
                console.log(result);
                $state.go('eventos');
                return result.data;
            })
            .catch(function(err){
                console.log(err);
            });

            $scope.evento = null; 
       }
    }
})();