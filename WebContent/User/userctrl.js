"use strict";
app.controller('UserController',['userService','$http','$scope',function(userService,$scope,$http){
  
	this.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:''	   
	    	   
	 };
	console.log("controller is working")
   //save user
	this.saveUser=function(user){
		userService.saveUser(user).then
		(function(data){
			var js=data
			console.log(js)
		},function(errorResponse){
			console.log("controller error")
		})
	
		
		
	}
	//login authentication
	this.loginAuthentication=function(user){
		console.log(user)
		userService.loginAuthentication(user).then
		(function(data){
			var logindat=data
			console.log(logindat)
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