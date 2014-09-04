angular.module('starter.services')

/**
 * A simple example service that returns some data.
 */
.factory('Loyalty', function() {

  // onSuccess Callback
  function onSuccess() {
      console.log('Pass shown to the user');
  }

  // onError Callback receives a string with the error message
  //
  function onError(error) {
      alert('Could not show pass: ' + error);
  }

  function getLoyaltyCard(error) {
      Passbook.downloadPass('https://d.pslot.io/cQY2f', onSuccess, onError);
  }

  function getCoupon(error) {
      Passbook.downloadPass('https://d.pslot.io/cQY2f', onSuccess, onError);
  }

  return {
    loyaltyCard: function() {
      return getLoyaltyCard("loyalty card not available");
    },
    coupon: function() {
      return getCoupon("coupon not available");
    }
  }
});

