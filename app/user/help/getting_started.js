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
		sample: 'Wms9NLr7UqrShuU4eK9bWgUSWgUjdYehsgv5hkBSZLUNcPUwBia118ATNNMKpKN9PbWwiZDMv7vu7JAASS9VWfiy1LaXt3Xoa',
		desc: 'Standard wallet address (AEON CLI wallet/AEON GUI wallet/AEONPocket wallet)',
		valid: true
	},
	{
		type: 'Username',
		sample: 'Wms9NLr7UqrShuU4eK9bWgUSWgUjdYehsgv5hkBSZLUNcPUwBia118ATNNMKpKN9PbWwiZDMv7vu7JAASS9VWfiy1LaXt3Xoa+3500',
		desc: 'Standard wallet address with fixed difficulty of 3500 for the worker',
		valid: true
	},
	{
		type: 'Username',
		sample: 'Wms9NLr7UqrShuU4eK9bWgUSWgUjdYehsgv5hkBSZLUNcPUwBia118ATNNMKpKN9PbWwiZDMv7vu7JAASS9VWfiy1LaXt3Xoa',
		desc: 'Integrated address, good for withdrawing to an exchange (eg. Bittrex, HitBTC), or if you want to use an integrated address',
		valid: true
	},
	{
		type: 'Username',
		sample: 'Wms9NLr7UqrShuU4eK9bWgUSWgUjdYehsgv5hkBSZLUNcPUwBia118ATNNMKpKN9PbWwiZDMv7vu7JAASS9VWfiy1LaXt3Xoa.6FEBAC2C05EDABB16E451D824894CC48AE8B645A48BD4C4F21A1CC8624EB0E6F',
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
