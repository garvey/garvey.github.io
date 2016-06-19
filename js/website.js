	
	var websiteApp = angular.module('websiteApp', ['ngRoute']);

		// When page changes, new page is displayed from the top
		angular.module('websiteApp').run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
	    	$rootScope.$on("$locationChangeSuccess", function() {
	        $anchorScroll();
	    	});
		}]);

		// configure our routes
		websiteApp.config(function($routeProvider, $locationProvider) {
			$routeProvider

				// Home
				.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'HomeController'

				})

				// Home
				.when('/home', {
					templateUrl : 'pages/home.html',
					controller  : 'HomeController'
				})

				// route for the CV page
				.when('/cv', {
					templateUrl : 'pages/cv.html',
					controller  : 'CvController'
				})

				// route for the cv page
				.when('/projects', {
					templateUrl : 'pages/projects.html',
					controller  : 'ProjectsController'
				})

				// route for the contact page
				.when('/contact', {
					templateUrl : 'pages/contact.html',
					controller  : 'ContactController'
				})

				.otherwise({ redirectTo: '/home' });

				/*$locationProvider.html5Mode({
	  				enabled: true,
					requireBase: false
				});
				$locationProvider.hashPrefix('!'); */
			});


		// CONTROLLERS
		
			// create the controller and inject Angular's $scope
			websiteApp.controller('HomeController', function($scope) {
				// create a message to display in our view
				//$scope.message = 'Everyone come and see how good I look!';
				//$scope.pageClass = 'page-home';
			});

			websiteApp.controller('CvController', function($scope) {
				//$scope.message = 'the CV page';
				//$scope.pageClass = 'cv';
			});

			websiteApp.controller('ProjectsController', function($scope) {
				//$scope.message = 'the CV page';
				//$scope.pageClass = 'projects';
			});

			websiteApp.controller('ContactController', function($scope) {
				//$scope.message = 'Contact us! JK. This is just a demo.';
				//$scope.pageClass = 'contact';
			});

		
// WUFOO FORM CODE

	var ri3e3q60i3vf3p;(function(d, t) {
    	var s = d.createElement(t), options = {
	    'userName':'goggarvey',
	    'formHash':'ri3e3q60i3vf3p',
	    'autoResize':true,
	    'height':'520',
	    'async':true,
	    'host':'wufoo.com',
	    'header':'show',
	    'ssl':true
	};
	s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
    
    s.onload = s.onreadystatechange = function() {
    	var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
    	try { ri3e3q60i3vf3p = new WufooForm();ri3e3q60i3vf3p.initialize(options);ri3e3q60i3vf3p.display(); } catch (e) {}};
    	var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
    })
    (document, 'script');

// END WUFOO FORM