angular.module('Usuarios', []).controller('Usuarios', function ($scope) {

    $('#Registro')
        .form({
            fields: {
                Nombre: 'empty',
                Email: 'empty',
                Password: ['minLength[6]', 'empty'],
            }
        });

    $('#Login')
        .form({
            fields: {
                Email: 'empty',
                Password: ['minLength[6]', 'empty'],
            }
        });

    $scope.Usuario = $('#Registro').form('get values');
    $scope.UsuarioLogin = $('#Login').form('get values');

    $scope.Registrar = function () {
        console.log($scope.Usuario);
    }

    $scope.Login = function () {
        console.log($scope.UsuarioLogin);
    }
})