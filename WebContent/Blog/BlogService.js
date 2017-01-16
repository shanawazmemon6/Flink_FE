app.service('BlogService',['$http',function($http){

	var base_url='http://localhost:8086/Flink_BE/';
	
	return{
		
		saveBlog:function(blog){
			return $http.post(base_url+"createblog",blog).then
			(function(response) {
				return response.data;
				console(response.data)
			},null)
		}
		
	}
	
}])
