app.service('friendService',['$http',function($http){
	var base_url='http://localhost:8086/Flink_BE/';
	return{
		
		//friend request
		friendrequest:function(friend){
			return $http.post(base_url+'friendrequest',friend).then
			(function(response){
				return response.data;
				},null)},
	//new friend list
		newfriend:function(){
		return $http.get(base_url+'newFriendDisplay').then
		(function(response) {
			return response.data;
		},null)},
	//friend list
		friend:function(){
		return $http.get(base_url+'friends').then
		(function(response) {
			return response.data;
		},null)},
	 //Status update
		statusUpdate:function(id,status){
			return $http.put(base_url+'updateStatus'+'/'+id+'/'+status).then
			(function(response) {
				return response.data;
			},null)}
		
	
	}}])