app.service('BlogService',['$http',function($http){

	var base_url='http://localhost:8086/Flink_BE/';
	
	return{
		//save blog
		saveBlog:function(blog){
			return $http.post(base_url+"createblog",blog).then
			(function(response) {
				return response.data;
				console.log(response.data)
			},null)},
	    //Blog Of Particular User
	        UsersBlog:function(){
	    	 return $http.get(base_url+"userBlog").then
	    	 (function(response) {
	    		 

	    		 return response.data;
	    		 
					},null)},
		//Delete Blog
		deleteBlog:function(blog_id){
	    	 return $http.get(base_url+"deleteBlog"+"/"+blog_id).then
	    	 (function(response) {
	    		return response.data;
	    		 },null)},
	    		 //edit Blog
					editBlog:function(blog_id){
						return $http.get(base_url+"editBlog"+"/"+blog_id).then
						(function(response) {
							return response.data;
							console.log(response.data)
						},null)},
						//Update Blog
					updateBlog:function(blog){
						return $http.put(base_url+"createblog",blog).then
						(function(response) {
							return response.data;
							console.log(response.data)
						},null)
					},
					
		//All Blog	
		allBlog:function(){
			return $http.get(base_url+"allBlog").then
			(function(response) {
				return response.data;
				console.log(response.data)
			},null)			
		}
		
	}
	
}])
