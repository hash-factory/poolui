'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "semiPOOL.com",
		api_url : 'https://aeon-api.semipool.com',
		api_refresh_interval: 10000,
		app_update_interval: 10*60000,
		coinCode: "AEON",
		coinCode_lower: "aeon",
		coinName: "AEON",
		coinName_lower: "aeon",		
		hightlight: "semiPOOL group always updates the best code improvement for efficiency even with risks. Risks give you better earnings",
		hightlight_link: "https://semipool.com"
	};
});
