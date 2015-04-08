'use strict';
angular.module('resume.profile', [])
	.constant('PROFILE', {
		          en: {
			          name      : 'Evan.Jia',
			          info      : {
				          location: 'Shanghai',
				          birth   : new Date('1989-11-24T16:00:00.000Z')
			          },
			          skills    : [
				          {name: 'Javascript', value: 8},
				          {name: 'AngularJs', value: 8},
				          {name: 'HTML', value: 7},
				          {name: 'CSS/LESS/SASS', value: 7},
				          {name: 'Gulp/Grunt', value: 5},
				          {name: 'JAVA', value: 6}
			          ],
			          education : [
				          'Graduated in Shanghai University of Engineering Science',
				          'Bachelor of Computer Science and Technology',
				          'CET6 531'
			          ],
			          contact   : {
				          mail  : 'gogoout@gmail.com',
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
