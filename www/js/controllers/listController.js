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
		console.log("Hemos cambiado a la vista de lista")
		$scope.locations = ComerciosService;
      });

      
      $ionicModal.fromTemplateUrl('templates/detail.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });
    }]);
