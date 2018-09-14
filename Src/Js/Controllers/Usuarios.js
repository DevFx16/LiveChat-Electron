angular.module('Usuarios', [])
    .factory('UsuariosFactory', function () {
        var Usuario;
    })
    .controller('Usuarios', function ($scope, UsuariosFactory) {

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

        $scope.Load = 'ui dimmer';

        $scope.Registrar = function () {
            $scope.Usuario = $('#Registro').form('get values');
            if ($scope.Usuario.Nombre.length > 0 && $scope.Usuario.Email.length > 0 && $scope.Usuario.Password.length >= 6) {
                console.log('UIf');
                $scope.Load = 'ui active dimmer';
                return false;
            }
        }

        $scope.Login = function () {
            $scope.UsuarioLogin = $('#Login').form('get values');
            if ($scope.UsuarioLogin.Email.length > 0 && $scope.UsuarioLogin.Password.length >= 6) {
                console.log('UIf');
                $scope.Load = 'ui active dimmer';
                return false;
            }
        }
    })