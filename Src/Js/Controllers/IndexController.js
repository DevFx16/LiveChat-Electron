angular.module('App', []).controller('HeaderController', ($scope) => {
    const { remote } = require('electron');

    $scope.Minimizar = () => {
        remote.getCurrentWindow().minimize();
    }

    $scope.Maximizar = () => {
        remote.getCurrentWindow().isMaximized() ? remote.getCurrentWindow().unmaximize() : remote.getCurrentWindow().maximize();
    }

    $scope.Cerrar = () => {
        remote.app.exit();
    }
})