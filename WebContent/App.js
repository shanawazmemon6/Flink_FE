var app=angular.module('myApp',['ui.router','ngCookies']);

app.config(function($stateProvider, $urlRouterProvider) {
	   $urlRouterProvider.otherwise('/home');
	 $stateProvider
	
	.state('home',{
		url: '/home',
		templateUrl:'HomePage/home.html'
	})
	.state('admin',{
		templateUrl:'Admin/admin.html',
	    controller :'adminController'

	})
	.state('register',{
		templateUrl:'User/register.html',
		 controller :'UserController'
	})	
	
	.state('login',{
		templateUrl:'User/login.html',
		 controller :'UserController'
	})	
	.state('userprofile',{
		templateUrl:'Profile/profile.html',
		 controller :'ProfileController'

})
	
	.state('userprofile.profileblog',{
		templateUrl:'Blog/blog.html',
		 controller :'BlogController'
	})	
		.state('userprofile.friend',{
		templateUrl:'Profile/friend.html',
		 controller :'ProfileController'
	})	
	.state('blog',{
		templateUrl:'User/homeblog.html',
		 controller :'BlogController'
	})	
	
})