(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .service('dataService', dataService)

    dataService.$inject = ['$http'];

    function dataService($http) {
        this.getData = getData;
        this.getDataById = getDataById;
        this.save = save;
        this.update = update;
        this.deleteEvento = deleteEvento;

        function getData() {
            return $http.get('http://localhost:3030/eventos')
            .then(function(result) {
                //console.log(result.data);
                return result.data;
            })
            .catch(function(err){
                console.log(err);
            });
        }

        function getDataById(id) {
            return $http.get('http://localhost:3030/eventos/' + id);
        }

        function save(data) {
            return $http.post('http://localhost:3030/eventos', data);
        }

        function update(data) {
            return $http.put('http://localhost:3030/eventos/' + data.id, data);
        }

        function deleteEvento(id) {
            return $http.delete('http://localhost:3030/eventos/' + id);
        }
    }
})();