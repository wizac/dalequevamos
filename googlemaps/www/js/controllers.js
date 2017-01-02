angular.module('demo', [])


.controller('Hello', function($scope, $http,$rootScope) {
    $http.get('http://morro.cloud.runaid.com.ar/map/getAllNodo').
        then(function(response) {
            $rootScope.greeting = response.data;
       
        });

})


.controller('misDatosCtrl2', function ($scope, $stateParams, $rootScope,$state, $http) {

$http.get('http://morro.cloud.runaid.com.ar/map/getAllNodo').
        then(function(response) {
            $rootScope.positions = response.data;
        });

    console.log($rootScope);
    
google.maps.Map.prototype.clearMarkers=function(){


	infowindow.close();

};
})






