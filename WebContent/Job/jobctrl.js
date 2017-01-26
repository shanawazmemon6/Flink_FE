app.controller('JobController',['JobService',function(JobService){
	
var job=this;
job.jobdetails={id:'',title:'',qualification:'',status:'',description:'',date_time:''}
job.upd='';


//all job details
var allJob=function(){
	  JobService.allJob().then
	  (function(d) {
		  job.alljobs=d;
	})}

//save job
job.saveJob=function(job){
	JobService.saveJob(job).then
	(function(d){
		console.log(d)
	     allJob();

	})}

//get job
job.getJob=function(id){
	JobService.getJob(id).
	then(function(d) {
	     job.upd='show'
	    	 job.jobdetails=d;
	})}
//deleteJob

job.deleteJob=function(id){
	JobService.deleteJob(id).
	then(function(d) {
		allJob();
	})
}

//updateJob
job.updateJob=function(job){
	JobService.updateJob(job).
	then(function(d) {
		allJob();
	})}


allJob();
  
job.submit=function(){
	if(job.upd=='show'){
		job.upd='';
		job.updateJob(job.jobdetails)
        job.reset();
		}else{
			job.saveJob(job.jobdetails);
			job.reset();
		}}


job.reset=function(){
	job.jobdetails={id:'',title:'',qualification:'',status:'',description:'',date_time:''}

}

}])