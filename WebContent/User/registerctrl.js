app.controller('RegisterController',['$cookies','userService','$rootScope','$scope','$http','$location',function($cookies,userService,$rootScope,$scope,$http,$location){

var cntrl=this;
	
console.log("register controller")
	cntrl.user={fname:'',lname:'',username:'',email:'',
	    	password:'',mobile:'',role:'',gender:'',dateofbirth:'',address:'',is_online:'',status:'',error:'',code:''	   
	    	   
	 };
	
	$(document).on('click', '.browse', function(){
		  var file = $(this).parent().parent().parent().find('.file');
		  file.trigger('click');
		});
		$(document).on('change', '.file', function(){
		  $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
		});
		
		cntrl.imageUpload=function(user){
	        var file = $scope.myFile;
	         console.log(file)
			userService.registerimageUpload(file,user)
		}
		
		//save user
		 cntrl.saveUser=function(user){
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
		// submit//register submit
		 cntrl.submit=function(){
			 cntrl.saveUser(cntrl.user)
			 cntrl.imageUpload(cntrl.user.username);
			 }
}]);