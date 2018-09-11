angular.module('App', ['ngRoute', 'Usuarios'])
    .controller('HeaderController', function ($scope) {
        const { remote, ipcRenderer } = require('electron');

        $scope.Minimizar = function () {
            remote.getCurrentWindow().minimize();
        }

        $scope.Maximizar = function () {
            remote.getCurrentWindow().isMaximized() ? remote.getCurrentWindow().unmaximize() : remote.getCurrentWindow().maximize();
        }

        $scope.Cerrar = function () {
            remote.app.exit();
        }

        $scope.Mover = function (ev) {
            ipcRenderer.send({
                x: ev.x,
                y: ev.y
            })
        }
    })
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/Login', {
            templateUrl: '../Pages/Login.html',
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