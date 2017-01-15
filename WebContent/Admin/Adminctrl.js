app.controller('adminController',['adminService',function(adminService){
	
	var ctrl=this;

	ctrl.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:'',error:'',code:''	   
	    	   
	 };
	ctrl.nav=[{status:'Users'},{status:'Admin'},{status:'Student'},{status:'Alumni'},{status:'Waiting'},{status:'Accepted'},{status:'Rejected'},{status:'Blocked'},{status:'Online'}]
	   
	
	ctrl.cval=function(status){
		if(status=='Users'){
		ctrl.navalue="";
		console.log(ctrl.navalue)
		}
		else{
			ctrl.navalue=status;
		}
	}
	//getAllUsers
	ctrl.getUsers=function(){
	adminService.fetchAllUsers()
	.then(
		function(d){
			ctrl.users=d;
			ctrl.userssize=ctrl.users.length;
			},
		function(errorResponse) {
			console.log("error")
		})//then
		}//getUsersS

	
	//statusUpdate
	
	ctrl.statusupdate=function(username,status){
		adminService.statusUpdate(username,status)
		.then(
			function(d){
	             ctrl.getUsers();

				},
			function(errorResponse) {
				console.log("error")
			})//then
			

	}
	//roleUpdate
	
	ctrl.roleupdate=function(username,role){
		adminService.roleUpdate(username,role)
		.then(
			function(d){
	             ctrl.getUsers();

				},
			function(errorResponse) {
				console.log("error")
			})//then
			

	}
	
             ctrl.getUsers();

}])