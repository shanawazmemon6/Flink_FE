"use strict"
app.controller('UserController',['userService','$http','$scope',function(userService,$scope,$http){

	this.getUsers=function(){
	
		console.log("controller");
		userService.fetch()
		.then(
			function(d){
				var user=d;
				console.log(user)
				
			},
			function(errorResponse) {
				console.log("error")

			}
		)
		
	
		
	}
	
	
}])