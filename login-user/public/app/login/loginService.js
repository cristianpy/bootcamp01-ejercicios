(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .service('loginService', loginService)

    loginService.$inject = ['$http'];

    function loginService($http) {
        this.loginUsuario        = loginUsuario;
        // this.logoutUsuario        = logoutUsuario;
        this.loginConGitHub = loginConGitHub;

        function loginUsuario(usuario) {
            return $http.post('http://localhost:3000/usuario/login', usuario)
            .then(function(result) {
                return result.data;
            })
            .catch(function(err) {
                console.log(err);
            });
        }

        function loginConGitHub() {
            return $http.get('http://localhost:3000/usuario/github/callback')
            .then(function(result) {
                console.log("res: "+result.user);
                
                return result.data;
            })
            .catch(function(err) {
                console.log(err);
            });
        }
    }
})();