angular.module('starter.controllers')

.controller('NearmeCtrl', function($scope, Maps) {
  Maps.init();
  $scope.itsu = '<img src="www/img/ionic.png">';

});
