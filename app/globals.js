'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "semiPOOL.com",
		api_url : 'https://etn.semipool.com/api',
		api_refresh_interval: 30000,
		app_update_interval: 10*60000
	};
});
