app.controller('adminController',['adminService',function(adminService){
	var ctrl=this;

	ctrl.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:'',error:'',code:''	   
	    	   
	 };
	   
	
	//getAllUsers
		ctrl.getUsers=function(){
		adminService.fetchAllUsers()
		.then(
			function(d){
				ctrl.users=d;
				console.log(users)
				},
			function(errorResponse) {
				console.log("error")

			})//then
			}//getUsersS

             this.getUsers();

}])