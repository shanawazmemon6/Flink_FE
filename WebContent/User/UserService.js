app.service('userService',['$http','$log',function($http,$scope,$log){
	return{
	fetch:function(){
	return	$http.get("http://localhost:8086/Flink_BE/allusers").then
		(function(response){
			console.log("fetching")
			return response.data;
			


			
		},null)
		
	}

	}
}])