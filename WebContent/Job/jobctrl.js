app.controller('JobController',['JobService',function(JobService){
	
var job=this;
job.jobdetails={id:'',title:'',qualification:'',status:'',description:'',date_time:''}
job.upd='';
job.jobapplied={error: "",code: "",id_job: "",username: "",jobid: "",status_job: "",adate: ""
	}
job.error="";

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

//apply job
job.applyJob=function(jobappiled){
	JobService.applyJob(jobappiled).
	then(function(d) {
		job.jobapplied=d;
		if(job.jobapplied.code=='200'){
			
			$('.apply').animate({left:'485px'},'slow');
			$('.apply').animate({left:'-120px'},5000);
			job.error="job applied"
		}
		else if(job.jobapplied.code=='404'){
			$('.apply').animate({left:'370px'},'slow');
			$('.apply').animate({left:'-250px'},5000);
			job.error="you already applied this job"

		}
		})}
            //applied jobs
      var userAppliedJob=function(){
    	JobService.userAppliedJob().then
    	(function(d){
    	   job.jobapply=d;	
		})}
      userAppliedJob();

job.submitjob=function(id){
	job.jobapplied.jobid=id;
	job.jobapplied.status_job="applied"
	job.applyJob(job.jobapplied);
}
  
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