angular.module('starter.controllers')

.controller('ScanDetailCtrl', function($scope, $stateParams, Receipts) {
  $scope.receipt = Receipts.get($stateParams.receiptId);
});
