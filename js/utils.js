'use strict';
angular.module('resume.utils', [])
	.factory('tick', function ($famous) {
		         var Transitionable = $famous['famous/transitions/Transitionable'];
		         var t = new Transitionable(0);
		         t.delay(10);
		         t.set(100, {duration: 2000});
		         return function () {
			         return t.get();
		         };
	         })
/**
 * @ngdoc service
 * @name resume.utils.mediaQuery
 * @param {object} swtichConfig
 * @description
 * simple mediaQuery function , given a object which contain keys in `phone`,`tablet`,`desktop` or `lgDesktop` and value as result.
 * and it will return a proper result judge by the current window width
 */
	.factory('mediaQuery', function () {
		         var windowWidth = document.documentElement.clientWidth,
			         matched = ['phone', 'tablet', 'desktop', 'lgDesktop'],
			         requirements = [768, 992, 1200];
		         for (var i = requirements.length; i--;) {
			         var require = requirements[i];
			         if (windowWidth > require) {
				         break;
			         }
			         else {
				         matched.pop();
			         }
		         }
		         return function (swtich) {
			         for (var i = matched.length; i--;) {
				         var match = matched[i];
				         if (swtich[match]) {
					         return swtich[match];
				         }
			         }
		         };
	         });
