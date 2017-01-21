app.service('profileService',['$http',function($http){
	var base_url='http://localhost:8086/Flink_BE/';
	return{
		
		//new friend list
		newfriend:function(){
		return $http.get(base_url+'newFriendDisplay').then
		(function(response) {
			return response.data;
		},null)
			
		},
			
		
		//friend list
		friend:function(){
		return $http.get(base_url+'friends').then
		(function(response) {
			return response.data;
		},null)
			
		},
		
		
	}
	}])