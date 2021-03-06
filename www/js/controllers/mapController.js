angular.module('starter').controller('MapController',
  [ '$scope',
    '$cordovaGeolocation',
    '$stateParams',
    '$ionicModal',
    '$ionicPopup',
    '$http',
    'LocationsService',
    'ComerciosService',
    'InstructionsService',
    function(
      $scope,
      $cordovaGeolocation,
      $stateParams,
      $ionicModal,
      $ionicPopup,
      $http,
      LocationsService,
      ComerciosService,
      InstructionsService
      ) {

      /**
       * Once state loaded, get put map on scope.
       */
      $scope.$on("$stateChangeSuccess", function() {
		//~ console.log("Hemos cambiado a mapa");
        $scope.locations = ComerciosService.lista;
        $scope.newLocation;

        //~ if(!InstructionsService.instructions.newLocations.seen) {
//~ 
          //~ var instructionsPopup = $ionicPopup.alert({
            //~ title: 'Add Locations',
            //~ template: InstructionsService.instructions.newLocations.text
          //~ });
          //~ instructionsPopup.then(function(res) {
            //~ InstructionsService.instructions.newLocations.seen = true;
            //~ });
//~ 
        //~ }

        $scope.map = {
          defaults: {
            tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            maxZoom: 18,
            zoomControlPosition: 'bottomleft'
          },
          markers : {},
          events: {
            map: {
              enable: ['context'],
              logic: 'emit'
            }
          }
        };
        //console.log(ComerciosService);
        
        //console.log(ComerciosService[0].nombre);
        
        angular.forEach(ComerciosService, function(comercio,indice) {
			//Evitamos comercios sin categoria
            if (comercio.categoria == "") {
				comercio.categoria=1;
			}
			//~ console.log("Añadiendo comercio "+indice+" "+comercio.nombre);
            //~ console.log(comercio.lat+","+comercio.lon);
			$scope.map.markers[indice] = {    
				lng : Number(comercio.longitud),
				lat : Number(comercio.latitud),
                icon: icons[Number(comercio.categoria)],
				message: "<span ng-click='viewDetail({{comercio.id_comercio}})';>"+comercio.nombre+"</span><br />"+
				comercio.direccion+"<br />"+
                "<a href='tel:comercio.telefono'>"+comercio.telefono+"</a></div><br />",
				draggable: false
			};
			//~ console.log("Tenemos la categoria: "+comercio.categoria);
			//~ console.log("Tenemos el icono: "+icons[Number(comercio.categoria)]);
			//~ console.log("Lat "+$scope.map.markers[indice].lat);
            //~ console.log(typeof($scope.map.markers[indice].lat));
            //~ console.log("Long "+$scope.map.markers[indice].lng);
            //~ console.log(typeof($scope.map.markers[indice].lng));
		});

        //$scope.goTo(0);
        //~ console.log("Centramos el mapa en vito");
        $scope.map.center  = {
          lat : 42.847363,
          lng : -2.6734835,
          zoom : 12
        };

      });

      var Location = function() {
        if ( !(this instanceof Location) ) return new Location();
        this.lat  = "";
        this.lng  = "";
        this.name = "";
      };
     var icons = {
        1 :  {
            iconUrl: 'img/alimentacion_marker-icon.png',
            iconRetinaUrl: 'img/alimentacion_marker-icon-2x.png',
            },
        2 :  {
            iconUrl: 'img/artesania_marker-icon.png',
            iconRetinaUrl: 'img/artesania_marker-icon-2x.png',
            },
        3 :  {
            iconUrl: 'img/mercados_marker-icon.png',
            iconRetinaUrl: 'img/mercados_marker-icon-2x.png',
            },				
        4 :  {
            iconUrl: 'img/limpieza_marker-icon.png',
            iconRetinaUrl: 'img/limpieza_marker-icon-2x.png',
            },
        5 :  {
            iconUrl: 'img/oficina_marker-icon.png',
            iconRetinaUrl: 'img/oficina_marker-icon-2x.png',
            },							
        6 :  {
            iconUrl: 'img/restaurante_marker-icon.png',
            iconRetinaUrl: 'img/restaurante_marker-icon-2x.png',
            },							
        7 :  {
            iconUrl: 'img/ropa_marker-icon.png',
            iconRetinaUrl: 'img/ropa_marker-icon-2x.png',
            },						
        8 :  {
            iconUrl: 'img/otros_marker-icon.png',
            iconRetinaUrl: 'img/otros_marker-icon-2x.png',
            }	
     }
      //~ $ionicModal.fromTemplateUrl('templates/addLocation.html', {
        //~ scope: $scope,
        //~ animation: 'slide-in-up'
      //~ }).then(function(modal) {
          //~ $scope.modal = modal;
        //~ });

      /**
       * Detect user long-pressing on map to add new location
       */
      $scope.$on('leafletDirectiveMap.contextmenu', function(event, locationEvent){
        $scope.newLocation = new Location();
        $scope.newLocation.lat = locationEvent.leafletEvent.latlng.lat;
        $scope.newLocation.lng = locationEvent.leafletEvent.latlng.lng;
        $scope.modal.show();
      });

      $scope.comercios = function() {
        LocationsService.savedLocations.push($scope.newLocation);
        $scope.modal.hide();
        $scope.goTo(LocationsService.savedLocations.length - 1);
      };
      $scope.viewDetail = function(id) {
		console.log("Mostramos la ficha del comercio "+id);
          $scope.comercio = $scope.comercios[3];
          $scope.modal.show()
      };
      
      $ionicModal.fromTemplateUrl('templates/detail.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
          $scope.modal = modal;
        });

      /**
       * Center map on specific saved location
       * @param locationKey
       */
      $scope.goTo = function(locationKey) {

        var location = LocationsService.savedLocations[locationKey];

        $scope.map.center  = {
          lat : location.lat,
          lng : location.lng,
          zoom : 12
        };

        $scope.map.markers[locationKey] = {
          lat:location.lat,
          lng:location.lng,
          message: location.name,
          focus: true,
          draggable: false
        };

      };

      /**
       * Center map on user's current position
       */
      $scope.locate = function(){

        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            $scope.map.center.lat  = position.coords.latitude;
            $scope.map.center.lng = position.coords.longitude;
            $scope.map.center.zoom = 15;

            $scope.map.markers.now = {
              lat:position.coords.latitude,
              lng:position.coords.longitude,
              message: "You Are Here",
              focus: true,
              draggable: false
            };

          }, function(err) {
            // error
            console.log("Location error!");
            console.log(err);
          });

      };

    }]);
