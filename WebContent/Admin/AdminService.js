 
app.service('adminService',['$http',function($http){
	var base_url='http://localhost:8086/Flink_BE/';
	return{

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