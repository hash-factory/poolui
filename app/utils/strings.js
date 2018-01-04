'use strict';

angular.module('utils.strings', [])

.filter('toXMR', function() {
  return function(amount) {
    return amount / 1000000000000;
  };
})

.filter('toHashRate', function() {
  return function(hashes) {
    
        $.getJSON("https://api.cryptonator.com/api/ticker/aeon-usd", function(data) {
		$scope.aeonusd = (data.ticker.price * 1).toFixed(3);						// CRYPTONATOR XMR/USD RATE
		//$scope.aeonweekrev = (1000/$scope.network.difficulty)*86400*7*$scope.network.value*$scope.aeonusd;
	});
	$.getJSON("https://api.coinmarketcap.com/v1/ticker/electroneum/?convert=USD", function(data) {
		$scope.etnusd = (data[0].price_usd * 1).toFixed(3);						// CRYPTONATOR XMR/USD RATE
		//$scope.etnweekrev = (1000/$scope.network.difficulty)*86400*7*$scope.network.value*$scope.etnusd;
	});
    
    if (hashes > 1000000) {
      return parseFloat((hashes / 1000000).toFixed(2)) + " MH/s"
    }
    if (hashes > 1000) {
      return parseFloat((hashes / 1000).toFixed(2)) + " KH/s"
    }
    return ( hashes || 0 ) + " H/s"
  };
})

.filter('hashToLink', function($sce) {
  return function(hash, type) {
    var str = (hash == undefined) ? 'none' : "<a class=\"md-body-2\" target=\"_new\" href=\"https://chainradar.com/aeon/"+type+"/" + hash + "\">" + hash + "</a>";
    return $sce.trustAsHtml(str); 
  };
})

.filter('difficultyToHashRate', function() {
  return function(hashrate) {
    return Math.floor(hashrate / 240)
  };
});

