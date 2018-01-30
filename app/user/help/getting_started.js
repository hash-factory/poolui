'use strict';

app.controller('GettingStartedCtrl', function($scope, $mdDialog, dataService) {
	$scope.portsList = {};
	$scope.selected = [];

	$scope.promise = dataService.getData("/pool/ports", function(data){
		$scope.portsList = data;
	});

	$scope.viewPorts = function(ev){
		$mdDialog.show({
			controller: "PortsModalCtrl",
			templateUrl: 'user/help/portsmodal.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: $scope.menuOpen // Only for -xs, -sm breakpoints.
		})
		.then(function(answer) {
			$scope.status = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	}

	$scope.samples=[
	{
		type: 'Username',
		sample: 'etnjvNoyqUAiJx7yZYWLsA6dzezF886YmCgftGksaDfj43o8RdUsNBmdFzRkZPpqQJYJ1pbmAWt7jKXSpAd31Ta83iFC9D7u9E',
		desc: 'Standard wallet address (Electroneum CLI wallet/Electroneum GUI wallet/Paper wallet)',
		valid: true
	},
	{
		type: 'Username',
		sample: 'etnjvNoyqUAiJx7yZYWLsA6dzezF886YmCgftGksaDfj43o8RdUsNBmdFzRkZPpqQJYJ1pbmAWt7jKXSpAd31Ta83iFC9D7u9E+80000',
		desc: 'Standard wallet address with fixed difficulty of 80000 for the worker',
		valid: true
	},
	{
		type: 'Username',
		sample: 'etnjvNoyqUAiJx7yZYWLsA6dzezF886YmCgftGksaDfj43o8RdUsNBmdFzRkZPpqQJYJ1pbmAWt7jKXSpAd31Ta83iFC9D7u9E',
		desc: 'Integrated address, good for withdrawing to an exchange (not yet, for Cryptopia please use paymentID), or if you want to use an integrated address',
		valid: true
	},
	{
		type: 'Username',
		sample: 'etnjzKFU6ogESSKRZZbdqraPdcKVxEC17Cm1Xvbyy76PARQMmgrgceH4krAH6xmjKwJ3HtSAKuyFm1BBWYqtchtq9tBap8Qr4M.e14ea5e66edee64f7e2cf5aac806365418b0c21aa050bad82db7eae00f0403f6',
		desc: 'Standard address with paymentID, good for withdrawing to an exchange that does not use an integrated address, or if you want to use a specific paymentID',
		valid: true
	},
	/*{ // BTC withdrawal not allowed
		type: 'Username',
		sample: '1KEJ7EJvfD2bpL6vA9nJpTEgoS9P5jdyce',
		desc: 'BTC Withdrawal (Will process through xmr.to or shapeshift.io automatically)',
		valid: false // this seems to make no difference? The configuration is displayed whether this is set to true or false
	},*/
	/*{ // BTC withdrawal not allowed
		type: 'Username',
		sample: '1KEJ7EJvfD2bpL6vA9nJpTEgoS9P5jdyce+100000',
		desc: 'BTC Withdrawal w/ fixed diff (Good for NiceHash)',
		valid: true
	},*/
	{
		type: 'Password',
		sample: 'Steve',
		desc: 'Miner identifier of Steve',
		valid: true
	},
	{
		type: 'Password',
		sample: 'Steve:test@e-mail.com',
		desc: 'Miner identifier of Steve, and register an account with the e-mail address as password',
		valid: true
	},
	/*{ // removed because it may confuse people
		type: 'Password',
		sample: 'test@e-mail.com',
		desc: 'Will register the e-mail address as the worker ID',
		valid: true
	}*/
	]

});
