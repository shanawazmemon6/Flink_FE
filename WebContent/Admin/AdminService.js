 
app.service('adminService',['$http',function($http){
	var base_url='http://localhost:8086/Flink_BE/';
	return{

 //Status Update
	statusUpdate:function(username,status){
		
		return $http.get(base_url+"status/"+username+"/"+status).then
		(function(response) {
			return response.data;
		},null)
	},
	//role Update
	roleUpdate:function(username,role){
		
		return $http.get(base_url+"role/"+username+"/"+role).then
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