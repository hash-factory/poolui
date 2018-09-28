'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "cloud.electronero.org",
		api_url : 'https://cloud.electronero.org',
		api_refresh_interval: 10000,
		app_update_interval: 10*60000,
		coinCode: "ETNX",
		coinCode_lower: "etnx",
		coinName: "ETNX",
		coinName_lower: "etnx",		
		hightlight: "cloudELECTRONERO group always updates the best code improvement for efficiency even with risks. Risks give you better earnings",
		hightlight_link: "https://cloud.electronero.org"
	};
});
