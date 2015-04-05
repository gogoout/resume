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
	         });
