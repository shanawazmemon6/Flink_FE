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

		
//all Jobs
  allJob:function(){
	  return $http.get(base_url+"allJob").
	  then(function(response) {
		  console.log(response.data)
			return response.data;
	})}//all Job

}}])