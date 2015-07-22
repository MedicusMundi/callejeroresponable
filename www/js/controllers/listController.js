angular.module('starter').controller('ListController',
  [ '$scope',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    'ComerciosService',
    function(
      $scope,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      ComerciosService
      ) {
      /**
       *
       */
      $scope.$on("$stateChangeSuccess", function() {		
		//~ console.log("Hemos cambiado a la vista de lista")
		$scope.comercios = ComerciosService;
      });

      $scope.viewDetail = function(id) {
          //~ console.log("Mostramos la ficha del comercio con id "+id);
          $scope.comercio = $scope.comercios[id];
          $scope.modal.show()
      };
      
      $ionicModal.fromTemplateUrl('templates/detail.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });
    }]);
