app.controller('UserController',['$cookies','userService','$rootScope','$http','$location',function($cookies,userService,$rootScope,$http,$location){
  
	var uctrl=this;
	
	uctrl.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:'',error:'',code:''	   
	    	   
	 };
	
	
	 $rootScope.loginData=$cookies.getObject("loginData")
		 if(typeof  $rootScope.loginData!='undefined')	{
			 console.log($rootScope.loginData.username)
		 }

	//console.log("controller is working")
   //save user
	 uctrl.saveUser=function(user){
		userService.saveUser(user).then
		(function(data){
			var regresponse=data
			console.log(regresponse)
		},function(errorResponse){
			console.log("controller error")
		})
	}
	
	//login authentication
	 uctrl.loginAuthentication=function(user){
		console.log(user)
		
		userService.loginAuthentication(user).then
		(function(data){
			if(data.code=='200'){
				uctrl.user=data;
			  $cookies.putObject("loginData",uctrl.user)
              $rootScope.loginData=$cookies.getObject("loginData")
              if( uctrl.user.role=='Student'){
                 $location.path("/");
              }
              else if(uctrl.user.role=='Admin'){
                  $location.path("/admin");

            	  
              }
              else{
                 

            	  
              }
              console.log("login successful")
			}
			else 
			{
				console.log("login failed")
			}
			
			
		},function(errorResponse){
			console.log("login error")
		})
		
	}

   //logout
	
	 uctrl.logout=function(){
		if(typeof $rootScope.loginData!='undefined' ){
		   
			$cookies.remove('loginData')
			$rootScope.loginData='';
            $location.path("/");
			console.log("logout")
		
		}
		
		
	}
	
	
	//getAllUsers
	 uctrl.getUsers=function(){
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
	 uctrl.submit=function(){
		 uctrl.saveUser(uctrl.user)

		 
		 
	   }
	   //login submit
	 uctrl.submitlogin=function(){
		 uctrl.loginAuthentication(uctrl.user)
	   }
	
}])