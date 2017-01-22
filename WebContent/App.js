var app=angular.module('myApp',['ui.router','ngCookies']);

app.config(function($stateProvider, $urlRouterProvider) {
	   $urlRouterProvider.otherwise('/home');
	 $stateProvider
	
	.state('home',{
		url: '/home',
		templateUrl:'HomePage/home.html'
	})
	.state('admin',{
		url:'/admin',
		templateUrl:'Admin/admin.html',
	    controller :'adminController'

	})
	.state('register',{
		url:'/register',
		templateUrl:'User/register.html',
		 controller :'UserController'
	})	
	
	.state('login',{
		url:'/login',

		templateUrl:'User/login.html',
		 controller :'UserController'
	})	
	.state('userprofile',{
		templateUrl:'Profile/profile.html',

})
	
	.state('userprofile.profileblog',{
		templateUrl:'Profile/blog/blog.html',
		 controller :'BlogController'
	})	
		.state('userprofile.friend',{
		templateUrl:'Profile/friend/Friend.html',
		 controller :'FriendController'
	})	
	.state('blog',{
		templateUrl:'User/homeblog.html',
		 controller :'BlogController'
	})	
	
})