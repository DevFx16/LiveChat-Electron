angular.module('App', ['ngRoute', 'Usuarios'])
    .controller('HeaderController', function ($scope) {
        const { remote } = require('electron');

        $scope.Minimizar = function () {
            remote.getCurrentWindow().minimize();
        }

        $scope.Maximizar = function () {
            remote.getCurrentWindow().isMaximized() ? remote.getCurrentWindow().unmaximize() : remote.getCurrentWindow().maximize();
        }

        $scope.Cerrar = function () {
            remote.app.exit();
        }
    })
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/Login', {
            templateUrl: '../Pages/Login.html',
            controller: 'Usuarios'
        })
            .when('/Registro', {
                templateUrl: '../Pages/Registro.html',
                controller: 'Usuarios'
            })

            .otherwise({
                redirectTo: '/Login'
            });

        $locationProvider.html5Mode({
            enable: true,
            requireBase: false
        });
    });