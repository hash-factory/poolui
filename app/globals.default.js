'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "semiPOOL.com",
		api_url : 'https://aeon.semipool.com/api',
		api_refresh_interval: 5000,
		app_update_interval: 30*60000
	};
});
