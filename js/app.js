'use strict';
angular.module('resume', [
	'famous.angular',
	'ui.router',
	'resume.ctrls',
	'resume.utils',
	'resume.profile'
])
	.config(function ($stateProvider, $urlRouterProvider) {
		        $stateProvider
			        .state('entry', {
				               url        : '/entry',
				               templateUrl: 'partials/layout.html',
				               controller : 'EntryCtrl'
			               })
			        .state('entry.me', {
				               url  : '/me/:language',
				               views: {
					               main: {
						               templateUrl: 'partials/content/main.html',
						               controller : 'MainInfoCtrl'
					               },
					               sub : {
						               templateUrl: 'partials/content/sub.html',
						               controller : 'SubInfoCtrl'
					               }
				               }
			               });
		        $urlRouterProvider.otherwise('/entry/me/en');
	        });