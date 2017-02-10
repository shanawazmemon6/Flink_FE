
app.service('userService',['$http','$q',function($http,$q){
	var base_url='http://localhost:8086/Flink_BE/';
	 var deffered = $q.defer();
	return{
	
	//saveUser
	saveUser:function(user){
		
		return $http.post(base_url+'registration',user).then
		(function(response) {
			console.log("Registering")
			return response.data
			
		},null)
		
	},	
	
	imageProfileUpload:function(file){
		var fd = new FormData();
		fd.append("file",file);
		console.log(fd)
				console.log(file)

		 $http.post(base_url+"upload", fd, {
            withCredentials: false,
            headers: {
              'Content-Type': undefined
            },
            transformRequest: angular.identity,
            
            responseType: "arraybuffer"
          }) .success(function(){
        	  console.log("success")
          })
          .error(function(){
        	  console.log("error")

          });
		
	},
	imageCoverUpload:function(file){
		var fd = new FormData();
		fd.append("file",file);
		console.log(fd)
				console.log(file)

		 $http.post(base_url+"coverupload", fd, {
            withCredentials: false,
            headers: {
              'Content-Type': undefined
            },
            transformRequest: angular.identity,
            
            responseType: "arraybuffer"
          }) .success(function(){
        	  console.log("success")
          })
          .error(function(){
        	  console.log("error")

          });
		
	},
	
	registerimageUpload:function(file,user){
		var fd = new FormData();
		fd.append("file",file);
		fd.append("user",user),
				console.log(file)
				console.log(user)

		 $http.post(base_url+"registerupload", fd, {
            withCredentials: false,
            headers: {
              'Content-Type': undefined
            },
            transformRequest: angular.identity,
            
            responseType: "arraybuffer"
          }) .success(function(){
        	  console.log("success")
          })
          .error(function(){
        	  console.log("error")

          });
		
	},
	//updateUser
	updateUser:function(user){
		
	return $http.put(base_url+'updated',user).then
		(function(response) {
			return response.data;
			
		},null)},	
	
	//login authentication

	loginAuthentication:function(user){
		
		return $http.post(base_url+'loginAuthentication',user).then
		(function(response) {
			var re=response.data;
			console.log(re)
			return response.data;
			
		},null)
	},
	
	
	//session
	validsession:function(){
		return $http.get(base_url+'validsession').then
		(function(response) {
			return response.data;
		},null)
	
	},
	//invalidate session
	invalidatesession:function(){
		return $http.get(base_url+'invalidatesession').then
		(function(response) {
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