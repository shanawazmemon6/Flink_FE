app.controller('UserController',['$cookies','userService','$rootScope','$http','$location',function($cookies,userService,$rootScope,$http,$location){
  
	this.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:'',error:'',code:''	   
	    	   
	 };
	
	console.log("controller is working")
	 $rootScope.loginData=$cookies.getObject("loginData")
		 if(typeof  $rootScope.loginData!='undefined')	{
			 console.log($rootScope.loginData.username)
		 }

	//console.log("controller is working")
   //save user
	this.saveUser=function(user){
		userService.saveUser(user).then
		(function(data){
			var regresponse=data
			console.log(regresponse)
		},function(errorResponse){
			console.log("controller error")
		})
	
		
		
	}
	//login authentication
	this.loginAuthentication=function(user){
		console.log(user)
		
		userService.loginAuthentication(user).then
		(function(data){
			if(typeof $rootScope.loginData=='undefined' ){
			if(data.code=='200'){
				
				this.user=data;
				
                 $cookies.putObject("loginData",this.user)
              $rootScope.loginData=$cookies.getObject("loginData")
                


				console.log("login successful")
			}
			else 
			{
				console.log("login failed")
				
			}
			}
			else{
				console.log("Your all already logged in")
			}
			
		},function(errorResponse){
			console.log("login error")
		})
		
		
	}

   
	
	//getAllUsers
	this.getUsers=function(){
		userService.fetchAllUsers()
		.then(
			function(d){
				var user=d;
				console.log(user)
				},
			function(errorResponse) {
				console.log("error")

			})//then
			}//getUsers
	  
	// submit//register submit
	   this.submit=function(){
		   this.saveUser(this.user)

		 
		 
	   }
	   //login submit
	   this.submitlogin=function(){
		   this.loginAuthentication(this.user)
	   }
	
}])