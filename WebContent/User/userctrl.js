app.controller('UserController',['$cookies','userService','$rootScope','$scope','$http','$location',function($cookies,userService,$rootScope,$scope,$http,$location){
  
	var uctrl=this;
	
	uctrl.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:'',error:'',code:''	   
	    	   
	 };

		
		  
		
	
	uctrl.imageUpload=function(){
		if(uctrl.status=='profile'){
			var file = $scope.myFile;
	         console.log(file)
			userService.imageProfileUpload(file)
		}
		if(uctrl.status=='cover'){
			var file = $scope.myFile;
	         console.log(file)
			userService.imageCoverUpload(file)
		}
        
	}
	
	uctrl.newfriend=[];
	
	 $rootScope.loginData=$cookies.getObject("loginData")
		 if(typeof  $rootScope.loginData!='undefined')	{
			 console.log($rootScope.loginData.username)
		 }
	 
	 uctrl.prup=function(value){
		 uctrl.status=value;
		 console.log( uctrl.status)
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
                   $location.path("/login");

                	uctrl.error="Administrator had rejected you. Please contact your administrator"   
                   }
                   if(uctrl.user.status=='blocked'){
                	   console.log("blocked")
                	                      $location.path("/login");

                	   uctrl.error="Administrator had blocked you. Please contact your administrator"   
   
                   }
                   if(uctrl.user.status=='waiting'){
                	   console.log("waiting")
                	     $location.path("/login");

                	   uctrl.error="Registration not approved. Please contact your administrator"   
                   }}}
			else 
			{
	         	   uctrl.error="Please Register your account Or check your password"   

				console.log("login failed")
			}},function(errorResponse){
			console.log("login error")
		})}
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
			 }})}
/*	 uctrl.validsession();
*/
	//invalidate session
	 uctrl.invalidatesession=function(){
		 userService.invalidatesession().then
		 (function(d) {
			 uctrl.user=d
			 })}

   //logout
     uctrl.logout=function(){
		if(typeof $rootScope.loginData!='undefined' ){
		uctrl.invalidatesession();
		console.log(uctrl.user)
			$cookies.remove('loginData')
			$rootScope.loginData='';
            $location.path("/login");
			console.log("logout")
		
		}}
     
     
     
     //update step 1
     uctrl.up=function(){
    	 uctrl.user= $rootScope.loginData;
    	 
     }
     
     
     //update step 1
     var updated=function(user){
		 userService.updateUser(user).then
		 (function(d) {
			 $rootScope.loginData=d;
       	  $cookies.putObject("loginData",d)

			 
		})}
     
    //update submit
     uctrl.upsubmit=function(){
    	updated(uctrl.user);
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
	  
	
	   //login submit
	 uctrl.submitlogin=function(){
		 uctrl.loginAuthentication(uctrl.user)
	   }}])