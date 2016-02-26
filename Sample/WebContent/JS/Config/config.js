'use strict';

myapp.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	
	$stateProvider.state('home',{
			url:'/home',
			template:" ",
			controller:'homeController'
	}).state('about',{
			url:'/about',
			template:"",
			controller:'homeController'
	});
	
	$urlRouterProvider.otherwise("/home");
	
	
}]);