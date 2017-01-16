app.controller('BlogController',['BlogService','$rootScope',function(BlogService,$location,$rootScope){
	
	var blogs=this;
	
blogs.blog={blog_id:'',title:'',description:'',writtenby:'',date_blog:'',like_log:'',dislike_blog:'',brief:''}

blogs.saveBlog=function(blog){
BlogService.saveBlog(blog).then(
	function(d) {
		blogs.blog=d;
		console.log(blogs.blog)
	})}

blogs.submit=function(){
	blogs.blog.blog_id='102'
    blogs.blog.date_blog=new Date();
	
	blogs.saveBlog(blogs.blog)
	
}

}])