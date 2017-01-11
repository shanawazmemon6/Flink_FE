var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
	
	$routeProvider
	.when('/',{
		templateUrl:'HomePage/home.html'
	})
	.when('/home',{
		templateUrl:'HomePage/home.html'
	})
	.when('/register',{
		templateUrl:'User/register.html',
		 controller :'UserController'
	})	
	.when('/login',{
		templateUrl:'User/login.html',
		 controller :'UserController'
	})	
	.otherwise({
		 redirectTo:'/'
		 })
})