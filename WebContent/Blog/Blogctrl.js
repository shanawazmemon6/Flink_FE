app.controller('BlogController',['BlogService','$rootScope',function(BlogService,$location,$rootScope){
	
	var ctrl=this;
	
ctrl.blog={blog_id:'',title:'',description:'',writtenby:'',date_blog:'',like_log:'',dislike_blog:'',brief:'',code:'',error:''}
      ctrl.blogs=[];
ctrl.upd='';
ctrl.saveBlog=function(blog){
BlogService.saveBlog(blog).then(
	function(d) {
	   console.log(ctrl.blog)
	   ctrl.fetchUserBlog();

	})}

ctrl.fetchUserBlog=function(){
	BlogService.UsersBlog().then(
			function(d) {
				ctrl.blogs=d;	
			})}

ctrl.deleteBlog=function(Blog_id){
	BlogService.deleteBlog(Blog_id).then
	(function(d){
		   ctrl.fetchUserBlog();

		console.log(d)
		
	})
	
}
ctrl.editBlog=function(Blog_id){
	BlogService.editBlog(Blog_id).then
	(function(d){
       ctrl.blog=d;
       ctrl.modblog=d;
       ctrl.upd='show'
		console.log(d)
		
	})}
ctrl.modBlog=function(Blog_id){
	BlogService.editBlog(Blog_id).then
	(function(d){
       ctrl.modblog=d;
       
		
	})}
ctrl.fetchUserBlog();

ctrl.updateBlog=function(blog){
	BlogService.updateBlog(blog).then(
		function(d) {
			
		   ctrl.fetchUserBlog();

		})}
ctrl.submit=function(){
	if(ctrl.upd=='show'){
		ctrl.updateBlog(ctrl.blog)
		ctrl.upd='';
       ctrl.reset();
		}else{
		ctrl.saveBlog(ctrl.blog)
		       ctrl.reset();

	    ctrl.blog.date_blog=new Date();
}
}
ctrl.reset=function(){
	ctrl.blog={blog_id:'',title:'',description:'',writtenby:'',date_blog:'',like_log:'',dislike_blog:'',brief:'',code:'',error:''}

	
}

}])