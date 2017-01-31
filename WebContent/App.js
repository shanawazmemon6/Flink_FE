var app=angular.module('myApp',['ui.router','ngCookies']);

app.config(function($stateProvider, $urlRouterProvider) {
	   $urlRouterProvider.otherwise('/home')
	$urlRouterProvider.when("/profile", "/profile/chatforum");

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
	.state('adminjob',{
		url:'/adminjob',
		templateUrl:'Job/Job.html',
	    controller :'JobController'

	})
		.state('homejob',{
		url:'/homejob',
		templateUrl:'Job/homejob.html',
	    controller :'JobController'

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
		url:'/profile',
		 controller :'UserController',
         templateUrl:'Profile/profile.html',

})

.state('userprofile.chatforum',{
		url:'/chatforum',
		templateUrl:'ChatForum/chatforum.html',
	    controller :'ChatForumCtrl'

	})
	
	.state('userprofile.profileblog',{
		url:'/blog',
		templateUrl:'Profile/blog/blog.html',
		 controller :'BlogController'
	})
	.state('userprofile.friend',{
			url:'/friend',

		templateUrl:'Profile/friend/Friend.html',
		 controller :'FriendController'
	})	
	.state('userprofile.profilejob',{
			url:'/profilejob',

		templateUrl:'Profile/job/profilejob.html',
		 controller :'JobController'
	})	
	.state('userprofile.adminjob',{
			url:'/adminjob',

		templateUrl:'Profile/job/adminjob.html',
		 controller :'JobController'
	})	
	.state('blog',{
		url:'/homeblog',
		templateUrl:'User/homeblog.html',
		 controller :'BlogController'
	})	
	
})

app.run(function($rootScope,$location,$http,$state,$cookies){
	
	$rootScope.$on('$locationChangeStart',function(event,next,current){
		var restrictedPage=$.inArray($location.path(),['','/','/home','/homeblog',
		                                               '/profile','/friend',
		                                               '/homejob','/blog',
		                                               '/admin','/homejob',
		                                               '/chatforum'
		                                               ,'/adminjob'])==-1;
	

		var loggedIn=$cookies.getObject("loginData");
      
		if(typeof loggedIn=='undefined'){
			if(restrictedPage){

			}
			else{
				$location.path('/login')
				$state.go('login')
				

			}
				
		}
		
	})
	
	
	
	
})
