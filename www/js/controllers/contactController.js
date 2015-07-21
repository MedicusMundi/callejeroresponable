angular.module('starter').controller('ContactController',
  [ '$scope',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    function(
      $scope,
      $stateParams,
      $ionicModal,
      $ionicPopup
      ) {
      /**
       *
       */
      $scope.$on("$stateChangeSuccess", function() {		
		console.log("Hemos cambiado a la vista de contacto")
		$scope.jsonCallback = function jsonCallback(json) {
			console.log(json);
				
			if (json.validacion == "ok"){
				$("#resultado").html("<span>enviado</span>");
			}
			else{
				$("#resultado").html("<span class='rojo'>todos los campos son obligatorios</span>");
			}
		};	
      });//FIN stateChangeSuccess
      
    }]);//FIN controller
