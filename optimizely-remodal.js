/*!
 * Optimizely A/B Test Adjustments for Modal, Step 1
 * https://github.com/Hydra9268
 *
 * Copyright 2015 Ryan Allen
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Date: 2015-06-23 06:31 GMT-9
 */

$(document).ready(function(){

	// Constants
	var COOKIENAME = '[cookiename]';	// Name of cookie to check
	var CHECKWAIT = 500;			// Forces jQuery to wait this long in milliseconds before doing anything
	var CHECKSPEED = 50;			// How fast in milliseconds for listener to check DOM for existance of PC modal
	var THEEND = 500;			// When to completely terminate this script
	
	// Variables
	var counter = 1;			// SetInterval counter

	// Return cookie
	var getCookie = function(name) {
		var match = document.cookie.match(name+'=([^;]*)');
		return match ? match[1] : undefined;
	};

	// Constantly checks webpage every .05 seconds (very fast!) to see if PC modal has triggered
	var OptimizelyPcCheck = setInterval(function() {

		// If a specific cookie is set to the desired value
		if (getCookie(COOKIENAME) == 'false') {

			// Optimizely A/B test adjustment listener: wait XXX amount of time before running jQuery
			var OptimizelyAdjustment = setInterval(function() {

				// BEGIN: Your Optimizely adjustments -------------------
				$('.className').css({ 'display' : 'none' });
				// END: Your Optimizely adjustments ---------------------

				// Kill listener when adjustments have been made
				clearInterval(OptimizelyAdjustment);
				console.log('Modal adjusted and OptimizelyAdjustment terminated');

			}, CHECKWAIT);

			console.log('[cookiename] set...');

			// Kill listener when cookie is set to true or false
			clearInterval(OptimizelyPcCheck);
		}
		// Otherwise cookie has not been set
		else
		{
			console.log('[cookiename] not set ' + counter);
			// Kill listener after a period of time (a fail-safe)
			if (counter >= THEEND) {
				clearInterval(OptimizelyPcCheck);
				console.log('OptimizelyPcCheck terminated');
			}
			// Increment counter
			counter++;
		}
	}, CHECKSPEED);

});
