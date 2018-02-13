'use strict';

angular.module('utils.strings', [])

.filter('toXMR', function() {
  return function(amount) {
    return amount / 10000000000;
  };
})

.filter('toHashRate', function() {
  return function(hashes) {
  
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
    var str = (hash == undefined) ? 'none' : "<a class=\"md-body-2\" target=\"_new\" href=\"https://http://blockexplorer.graft.network/"+type+"/" + hash + "\">" + hash + "</a>";
    return $sce.trustAsHtml(str); 
  };
})

.filter('difficultyToHashRate', function() {
  return function(hashrate) {
    return Math.floor(hashrate / 120)
  };
});

