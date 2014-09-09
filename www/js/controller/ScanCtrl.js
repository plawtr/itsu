angular.module('starter.controllers')

.controller('ScanCtrl', function($scope, Receipts) {

  $scope.receipts = Receipts.all();

  $scope.scanReceipt = function () {
      Receipts.scan();
      
  }
});
