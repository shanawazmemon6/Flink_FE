app.controller('ProfileController',['profileService',function(profileService){

	var fctrl=this;
	fctrl.newfriend=[];
	fctrl.friends=[];
	//new friend 
	 fctrl.getNewFriend=function(){
		 profileService.newfriend().then
		 (function(d) {
			fctrl.newfriend=d;
			console.log(d)
		})
	 }
	 fctrl.getNewFriend();
		
		//friend 
		 fctrl.friend=function(){
			 profileService.friend().then
			 (function(d) {
				fctrl.friends=d;
				console.log(d)
			})
		 }
		 
		 fctrl.friend();
}])


	
	

