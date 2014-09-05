angular.module('starter.controllers')
  .controller('LoyaltyCtrl', function ($scope, Loyalty, $state) {
    $scope.getLoyaltyCard = function () {
      Loyalty.getCard();
    }
        
    $scope.getCoupon = function () {
      Loyalty.getCoupon()
    }
  });