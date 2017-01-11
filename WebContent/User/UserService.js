"use strict";
app.service('userService',['$http','$log',function($http,$scope,$log){
	var base_url='http://localhost:8086/Flink_BE/';
	return{
	
	//saveUser
	saveUser:function(user){
		
		return $http.post(base_url+'registration',user).then
		(function(response) {
			console.log("Registering")
			return response.data
			
		},null)
		
	},	
	
	//login authentication

	loginAuthentication:function(user){
		
		return $http.post(base_url+'loginAuthentication',user).then
		(function(response) {
			var re=response.data;
			console.log("Login U In"+re)
			return response.data;
			
		},null)
	},
	
	
	
		
		
		
   //fetchAllUser
	fetchAllUsers:function(){
	return	$http.get(base_url+"allusers").then
		(function(response){
			console.log("fetching")
			return response.data;
	},null)
		}//fetchalluser
	}//return
}])//service