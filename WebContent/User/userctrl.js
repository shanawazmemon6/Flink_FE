app.controller('UserController',['$cookies','userService','$rootScope','$http','$location',function($cookies,userService,$rootScope,$http,$location){
  
	var uctrl=this;
	
	uctrl.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:'',error:'',code:''	   
	    	   
	 };
	
	uctrl.newfriend=[];
	
	 $rootScope.loginData=$cookies.getObject("loginData")
		 if(typeof  $rootScope.loginData!='undefined')	{
			 console.log($rootScope.loginData.username)
		 }

	//console.log("controller is working")
   //save user
	 uctrl.saveUser=function(user){
		userService.saveUser(user).then
		(function(data){
			if(data.code=='200'){
			var regresponse=data
            $location.path("/login");
			}
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
				console.log(uctrl.user.status)
			  
              if( (uctrl.user.role=='Student'|| uctrl.user.role=='Alumni' || uctrl.user.role=='Alumni')  && (uctrl.user.status=='accepted')){
            	  $cookies.putObject("loginData",uctrl.user)
                  $rootScope.loginData=$cookies.getObject("loginData")
                 $location.path("/");
              }
              else if(uctrl.user.role=='Admin'){
            	  $cookies.putObject("loginData",uctrl.user)
                  $rootScope.loginData=$cookies.getObject("loginData")
                  $location.path("/admin");

            	  
              }
              else{
                   if(uctrl.user.status=='rejected'){
                	   console.log("rejected")

                	uctrl.error="Administrator had rejected you. Please contact your administrator"   
                   }
                   if(uctrl.user.status=='blocked'){
                	   console.log("blocked")
                	   uctrl.error="Administrator had blocked you. Please contact your administrator"   
   
                   }
                   if(uctrl.user.status=='waiting'){
                	   console.log("waiting")
                	   uctrl.error="Registration not approved. Please contact your administrator"   
   
                   }
            	
                   $location.path("/login");
              }
			}
			else 
			{
				console.log("login failed")
			}
			
			
		},function(errorResponse){
			console.log("login error")
		})
		
	}
	 
	 //valid session
	 uctrl.validsession=function(){
		 userService.validsession().then
		 (function(d) {
			 uctrl.user=d
			 if(uctrl.user.code=='200'){
				 uctrl.loginAuthentication(uctrl.user);
			 }
			 else{
				 uctrl.logout();
			 }
		})
		 
	 }
	//invalidate session
	 uctrl.invalidatesession=function(){
		 userService.invalidatesession().then
		 (function(d) {
			 uctrl.user=d
			 
			
			
		})
		 
	 }
	 uctrl.validsession();

   //logout
	
	 uctrl.logout=function(){
		if(typeof $rootScope.loginData!='undefined' ){
		uctrl.invalidatesession();
		console.log(uctrl.user)
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