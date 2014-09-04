angular.module('starter.services')

/**
 * A simple example service that returns some data.
 */
.factory('Receipts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var receipts = [
    { id: 0, name: 'Aldgate' },
    { id: 1, name: 'Baker Street' },
    { id: 2, name: 'Bankside' },
    { id: 3, name: 'Bishopsgate (Broadgate Arcade)' }
  ];

  return {
    all: function() {
      return receipts;
    },
    get: function(receiptId) {
      // Simple index lookup
      return receipts[receiptId];
    }
  }
});