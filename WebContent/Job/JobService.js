app.service('JobService',['$http',function($http){
	
	var base_url='http://localhost:8086/Flink_BE/';

return{
	//Save Job
    saveJob:function(job){
    	return $http.post(base_url+"postJob",job).
    	then(function(response) {
    		console.log(response.data)
			return response.data;
		})},//Save Job
	//getJob	
	getJob:function(id)	{
		return $http.get(base_url+"getJob/"+id).
    	then(function(response) {
    		console.log(response.data)
			return response.data;
        })},//getJob
     //update job
       updateJob:function(job){
    	   return $http.put(base_url+"updateJob",job)
    	   .then(function(response) {
       		console.log(response.data)
       		return response.data; 
		})},
		//delete Job
		deleteJob:function(id){
			return $http.get(base_url+"deleteJob/"+id)
	    	   .then(function(response) {
	       		console.log(response.data)
	       		return response.data; 
	    	   })},
	    	   
	   //apply Job
	     applyJob:function(jobapplied){
				return $http.post(base_url+"applyJob",jobapplied).
				then(function(response) {
					console.log(response.data)
		       		return response.data; 
				})
 
	     },

	//get applied job of particular user
	     userAppliedJob:function(){
				return $http.get(base_url+"userJob").
				then(function(response) {
					 console.log(response.data)
					return response.data;
				})
	     },
	     //allJobApplied
	     appliedJob:function(){
				return $http.get(base_url+"allJobApplied").
				then(function(response) {
					 console.log(response.data)
					return response.data;
				})
	     },
	     
	     //update status
	     updateStatus:function(id,status){
				return $http.get(base_url+"updateJobStatus/"+id+"/"+status).
				then(function(response) {
					 console.log(response.data)
					return response.data;
				})
	     },
	     
	     
	     
//all Jobs
  allJob:function(){
	  return $http.get(base_url+"allJob").
	  then(function(response) {
		  console.log(response.data)
			return response.data;
	})}//all Job

}}])