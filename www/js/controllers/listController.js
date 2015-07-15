angular.module('starter').controller('ListController',
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
		console.log("Hemos cambiado a la vista de lista")
      });

      var Location = function() {
        if ( !(this instanceof Location) ) return new Location();
        this.lat  = "";
        this.lng  = "";
        this.name = "";
      };
      $ionicModal.fromTemplateUrl('templates/addLocation.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });
    }]);
