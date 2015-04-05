(function(){'use strict';
angular.module('resume', [
	'famous.angular',
	'ui.router',
	'resume.ctrls',
	'resume.utils',
	'resume.profile'
]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
	        }]);
angular.module('resume.ctrls', []).controller('EntryCtrl', ['$scope', '$famous', '$timeline', '$state', 'tick', function ($scope, $famous, $timeline, $state, tick) {
		            var Easing = $famous['famous/transitions/Easing'];
		            $scope.vm = this;

		            this.foregroundOption = {
			            timeline : function () {
				            return $timeline(
					            [[30, 0, Easing.inOutQuad],
					             [50, 1]])(tick());
			            },
			            translate: $timeline(
				            [[0, [0, -1000, 1]],
				             [1, [0, 0, 1]]]
			            )
			            //skew     : $timeline(
			            //   [[0, [0, 0, 0.9]],
			            //    [1, [0, 0, -0.3]]]
			            //)
			            //scale    : $timeline(
			            //   [[0, [0.3, 0.3]],
			            //    [1, [1, 1]]]
			            //)
		            };

		            this.backgroundOption = {
			            timeline : function () {
				            return $timeline(
					            [[0, 0, Easing.inOutQuad],
					             [30, 1]])(tick());
			            },
			            translate: $timeline(
				            [[0, [2000, 0, -1]],
				             [1, [0, 0, -1]]]
			            )
			            //spin    : $timeline(
			            //   [[0, -Math.PI*2],
			            //    [1, 0]]
			            //),
			            //scale   : $timeline(
			            //   [[0, [0.1, 0.1]],
			            //    [1, [1, 1]]]
			            //)
		            };

		            this.scrollViewOption = {
			            direction: 1
		            };
		            var EventHandler = $famous['famous/core/EventHandler'];
		            this.eventHandler = new EventHandler();
	            }]).controller('MainInfoCtrl', ['$scope', '$famous', '$stateParams', '$timeline', 'tick', 'PROFILE', function ($scope, $famous, $stateParams, $timeline, tick, PROFILE) {
		            var Easing = $famous['famous/transitions/Easing'];
		            $scope.parentVm = $scope.vm;
		            $scope.vm = this;

		            this.leadingOption = {
			            timeline : function () {
				            return $timeline(
					            [[50, 0, Easing.inOutQuad],
					             [70, 1]])(tick());
			            },
			            translate: $timeline(
				            [[0, [0, -200]],
				             [1, [0, 0]]]
			            )
		            };

		            this.skillsOption = {
			            timeline : function () {
				            return $timeline(
					            [[60, 0, Easing.inOutQuad],
					             [80, 1]])(tick());
			            },
			            translate: $timeline(
				            [[0, [5, -200]],
				             [1, [5, 0]]]
			            )
		            };


		            this.educationOption = {
			            timeline : function () {
				            return $timeline(
					            [[70, 0, Easing.inOutQuad],
					             [90, 1]])(tick());
			            },
			            translate: $timeline(
				            [[0, [5, -200]],
				             [1, [5, 0]]]
			            )
		            };

		            this.profile = PROFILE[$stateParams.language];
	            }]).controller('SubInfoCtrl', ['$scope', '$famous', '$timeline', '$stateParams', 'tick', 'PROFILE', function ($scope, $famous, $timeline, $stateParams, tick, PROFILE) {
		            var Easing = $famous['famous/transitions/Easing'];
		            $scope.parentVm = $scope.vm;
		            $scope.vm = this;

		            this.infoOption = {
			            timeline : function () {
				            return $timeline(
					            [[50, 0, Easing.inOutQuad],
					             [70, 1]])(tick());
			            },
			            translate: $timeline(
				            [[0, [0, -200]],
				             [1, [0, 0]]]
			            )
		            };

		            this.contactOption = {
			            timeline : function () {
				            return $timeline(
					            [[60, 0, Easing.inOutQuad],
					             [80, 1]])(tick());
			            },
			            translate: $timeline(
				            [[0, [0, -200]],
				             [1, [0, 0]]]
			            )
		            };


		            this.experienceOption = {
			            timeline : function () {
				            return $timeline(
					            [[70, 0, Easing.inOutQuad],
					             [90, 1]])(tick());
			            },
			            translate: $timeline(
				            [[0, [0, -200]],
				             [1, [0, 50]]]
			            )
		            };

		            this.profile = PROFILE[$stateParams.language];
	            }]).controller('SkillsCtrl', ['$scope', '$famous', '$timeline', 'tick', function ($scope, $famous, $timeline, tick) {
		            var Easing = $famous['famous/transitions/Easing'];

		            function makeTransitionable(number) {
			            return $timeline(
					            [[80, 0, Easing.outBack],
					             [100, 1]])(tick()) * number;
		            }

		            function getSize(number, background) {
			            return [305 / 10 * number, background ? 3 : 5];
		            }

		            function getColor(number) {
			            switch (true) {
				            case number <= 3:
					            return '#B36596';
				            case number <= 5:
					            return '#ECC160';
				            case number <= 7:
					            return '#62D4DB';
				            default:
					            return '#58C891';
			            }
		            }

		            $scope.makeTransitionable = makeTransitionable;
		            $scope.getSize = getSize;
		            $scope.getColor = getColor;
	            }]);
angular.module('resume.profile', []).constant('PROFILE', {
    en: {
        name: 'Evan.Jia',
        info: {
            location: 'Shanghai',
            birth: new Date('1989-11-24T16:00:00.000Z')
        },
        skills: [
        				          {name: 'Javascript', value: 8},
        				          {name: 'AngularJs', value: 8},
        				          {name: 'HTML', value: 7},
        				          {name: 'CSS/LESS/SASS', value: 7},
        				          {name: 'Gulp/Grunt', value: 5},
        				          {name: 'JAVA', value: 6}
        			          ],
        education: [
        				          'Bachelor of Computer Science and Technology',
        				          'Graduated from Shanghai University of Engineering Science',
        				          'CET6 531'
        			          ],
        contact: {
            mail: 'gogoout@gmail.com',
            github: 'github.com/gogoout/'
        },
        experience: [
        				          {
        					          company    : 'Shanghai Logi Software Co., Ltd.',
        					          post       : 'Vice group leader of Front End & Front End Developer',
        					          from       : new Date('2012-06-30T16:00:00.000Z'),
        					          to         : null,
        					          description: [
        						          'Help develop `lpromis3` with JAVA/JSF/Javascript',
        						          'Built development environment for `lpromis ui` & `lpromis mobile` & `lpromis portal` with Gulp/Grunt',
        						          'Developed `lpromis ui` with AngularJs/Bootstrap/LESS including all Javascript & LESS code',
        						          'Leading the development of `lpromis mobile` with AngularJs/Ionic/SASS which is currently available in the App Store',
        						          'Leading the development of `lpromis portal` with AngularJs/LESS'
        					          ]
        				          }
        			          ]
    }
});
angular.module('resume.utils', []).factory('tick', ['$famous', function ($famous) {
		         var Transitionable = $famous['famous/transitions/Transitionable'];
		         var t = new Transitionable(0);
	             t.delay(10);
		         t.set(100, {duration: 2000});
		         return function () {
			         return t.get();
		         };
	         }]);
}());