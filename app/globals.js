'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "semiPOOL.com",
		api_url : 'https://aeon.semipool.com/api',
		api_refresh_interval: 10000,
		app_update_interval: 10*60000
	};
});
