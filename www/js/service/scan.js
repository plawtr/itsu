angular.module('starter.services')

/**
 * A simple example service that returns some data.
 */
.factory('Receipts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var receipts = [
    { 
      id: 0, 
      name: 'Aldgate', 
      address: '77 Aldgate High Street',
      address2: 'London, EC3N 1BD' ,
      date: 'September 1, 2014' 
    },
    { id: 1, 
      name: 'Baker Street', 
      address: 'Unit 1, 15 Baker Street ',
      address2: 'London, W1U 8EG',
      date: 'September 3, 2014' 
    },
    { id: 2, 
      name: 'Bankside', 
      address: 'The Harlequin Building, 65 Southwark St ',
      address2: 'London, SE1 0HR',
      date: 'September 5, 2014' 
    },
    { id: 3, 
      name: 'Bishopsgate (Broadgate)',  
      address: '10-11 Broadgate Arcade, 155 Bishopsgate',
      address2: 'London, EC2M 3TQ',
      date: 'September 9, 2014' 
    }
  ];

  function scan() {
    console.log('scanning');
        
    var scanner = cordova.require("cordova/plugin/BarcodeScanner");

    scanner.scan(function (result) { 

    if (!result.cancelled)  {
      receipts.push(
        { id: receipts.length,
          name: 'Bishopsgate',
          adress: '55 Bishopsgate',
          adress2: 'London, EC2N 3AS',
          date: 'September 11, 2014'
        }
      )}; 
    // setTimeout(function() {
    //   alert("We got a barcode\n" + 
    //   "Result: " + result.text + "\n" + 
    //   "Format: " + result.format + "\n" + 
    //   "Cancelled: " + result.cancelled);  
    // }, 0);

   console.log("Scanner result: \n" +
      "text: " + result.text + "\n" +
      "format: " + result.format + "\n" +
      "cancelled: " + result.cancelled + "\n");
    // document.getElementById("info").innerHTML = result.text;
    // console.log(result);
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





    