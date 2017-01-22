app.controller('FriendController',['friendService',function(friendService){

	console.log("FriendController");
	
	
	var fctrl=this;
	fctrl.newfriend=[];
	fctrl.friends=[];
	fctrl.fjson={userid:"",friendid:"",status:"",id:""}
	fctrl.navpill=[{"nav":"Friends"},{"nav":"Friends Request"},{"nav":"Find Friends"}]
    fctrl.navStatus='Friends'
	
	fctrl.updateView=function(navStatus){
		if(navStatus=='Find Friends'){
			console.log(navStatus);
			 fctrl.getNewFriend();
			 fctrl.navStatus='Find Friends'
       }
		if(navStatus=='Friends'){
			console.log(navStatus);
			 fctrl.friend();
			 fctrl.navStatus='Friends'
		}
		if(navStatus=='Friends Request'){
			console.log(navStatus);
			fctrl.friend();
			 fctrl.navStatus='Friends Request'
		}}
	//new friend 
	 fctrl.getNewFriend=function(){
		 friendService.newfriend().then
		 (function(d) {
			fctrl.newfriend=d;
			console.log(d)
		})}
		
		//friend 
		 fctrl.friend=function(){
			 friendService.friend().then
			 (function(d) {
				fctrl.friends=d;
				
				console.log(d)
			}) }
		 fctrl.friend();

	//friend request
	fctrl.friendrequest=function(friend){
		friendService.friendrequest(friend).then
		(function(d) {
			console.log(d);
			fctrl.friend();
			 fctrl.getNewFriend();
			 })}
	
	fctrl.statusUpdate=function(id,status){
		console.log("status cntrl")
		friendService.statusUpdate(id,status).then
		(function(d) {
			fctrl.friend();
			 fctrl.getNewFriend();
			console.log(d)
		})
	}
	
	
	//submit
    fctrl.submit=function(friendid){
		fctrl.fjson={userid:"",friendid:friendid,status:"",id:""}
		fctrl.friendrequest(fctrl.fjson);
		
	}
	
	


		 
}])


	
	

