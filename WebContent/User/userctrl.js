
(function(){
	"use strict";
app.controller('UserController',['UserService','$scope',function($scope,UserService) {
	       var regalias=this;
	       
	       regalias.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:''	   
	    	   
	 };
	      
regalias.getAllUsers = function (){
    	 console.log("controller")
    	UserService.fetchAllUsers().
         then(
        function(d) {
			console.log("controller data")

			regalias.user=d;
        },
        function(error) {
			console.error("didn't get")
		})
    	 
    	 
    	 
     }
	      
     }
                
          
])
})();

