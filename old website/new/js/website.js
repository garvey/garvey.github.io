	// create the module and name it scotchApp
	var websiteApp = angular.module('websiteApp', ['ngRoute'])

	// configure our routes
	websiteApp.config(function($routeProvider, $locationProvider) {
		
		$routeProvider.when('/', {
			templateUrl : 'pages/home.html',
			//controller  : 'HomeController'
		});

		// route for the home page
		$routeProvider.when('/home', {
			templateUrl : 'pages/home.html',
			//controller  : 'HomeController'
		});

		// route for the cv page
		$routeProvider.when('/cv', {
			templateUrl : 'pages/cv.html'
			//controller  : 'CvController'
		});

		// route for the cv page
		$routeProvider.when('/projects', {
			templateUrl : 'pages/projects.html'
			//controller  : 'ProjectsController'
		});


		// route for the contact page
		$routeProvider.when('/contact', {
			templateUrl : 'pages/contact.html',
			//controller  : 'ContactController'
		});

		// use the HTML5 History API
        //$locationProvider.html5Mode(true).hashPrefix('!');

		//$routeProvider.otherwise({ redirectTo: '/home' });
	});


// CONTROLLER
websiteApp.controller("MainController", function($scope) {

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

	websiteApp.controller('projectsController', function($scope) {
		//$scope.message = 'the CV page';
		//$scope.pageClass = 'projects';
	});

	websiteApp.controller('ContactController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
		//$scope.pageClass = 'contact';
	});

});