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

  function scan() {
    console.log('scanning');
        
    var scanner = cordova.require("cordova/plugin/BarcodeScanner");

    scanner.scan(function (result) { 

    setTimeout(function() {
      alert("We got a barcode\n" + 
      "Result: " + result.text + "\n" + 
      "Format: " + result.format + "\n" + 
      "Cancelled: " + result.cancelled);  
    }, 0);

   console.log("Scanner result: \n" +
      "text: " + result.text + "\n" +
      "format: " + result.format + "\n" +
      "cancelled: " + result.cancelled + "\n");
    document.getElementById("info").innerHTML = result.text;
    console.log(result);
    /*
    if (args.format == "QR_CODE") {
      window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
    }
    */
    }, function (error) { 
      console.log("Scanning failed: ", error); 
    });
  }

  return {
    all: function() {
      return receipts;
    },
    get: function(receiptId) {
      // Simple index lookup
      return receipts[receiptId];
    },
    scan: function() {
      return scan();
    }
  }
});





    