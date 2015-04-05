'use strict';
angular.module('resume.ctrls', [])
	.controller('EntryCtrl', function ($scope, $famous, $timeline, $state, tick) {
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
	            })
	.controller('MainInfoCtrl', function ($scope, $famous, $stateParams, $timeline, tick, PROFILE) {
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
	            })
	.controller('SubInfoCtrl', function ($scope, $famous, $timeline, $stateParams, tick, PROFILE) {
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
	            })
	.controller('SkillsCtrl', function ($scope, $famous, $timeline, tick) {
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
	            });
