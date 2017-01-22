app.service('BlogService',['$http',function($http){

	var base_url='http://localhost:8086/Flink_BE/';
	
	return{
		
		saveBlog:function(blog){
			return $http.post(base_url+"createblog",blog).then
			(function(response) {
				return response.data;
				console.log(response.data)
			},null)
		},
	    
	        UsersBlog:function(){
	    	 return $http.get(base_url+"userBlog").then
	    	 (function(response) {
	    		 

	    		 return response.data;
	    		 
					},null)
					},
		
		deleteBlog:function(blog_id){
	    	 return $http.get(base_url+"deleteBlog"+"/"+blog_id).then
	    	 (function(response) {
	    		 

	    		 return response.data;
	    		 
					},null)
					},
					editBlog:function(blog_id){
						return $http.get(base_url+"editBlog"+"/"+blog_id).then
						(function(response) {
							return response.data;
							console.log(response.data)
						},null)
					},
					updateBlog:function(blog){
						return $http.put(base_url+"createblog",blog).then
						(function(response) {
							return response.data;
							console.log(response.data)
						},null)
					},
		
	}
	
}])
