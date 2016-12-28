var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
	
	$routeProvider
	.when('/',{
		templateUrl:'HomePage/home.html'
	})
	.when('/home',{
		templateUrl:'HomePage/home.html'
	})
		
	.otherwise({
		 redirectTo:'/'
		 })
})