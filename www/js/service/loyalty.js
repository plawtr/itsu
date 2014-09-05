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
      Passbook.downloadPass('https://d.pslot.io/p/58hHOZnnSQGEL903A8Pjzg?t=Am_3F-g', onSuccess, onError);
  }

  function getCoupon(error) {
      Passbook.downloadPass('https://d.pslot.io/p/ghViNL_VSZuI7Jhn9oLSaw?t=ykf02I0', onSuccess, onError);
  }

  return {
    getCard: function() {
      return getLoyaltyCard("loyalty card not available");
    },
    getCoupon: function() {
      return getCoupon("coupon not available");
    }
  }
});

