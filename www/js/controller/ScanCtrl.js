angular.module('starter.controllers')

.controller('ScanCtrl', function($scope, Receipts) {
  $scope.receipts = Receipts.all();
});
