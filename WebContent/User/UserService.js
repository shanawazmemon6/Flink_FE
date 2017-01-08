(function(){

 "use strict";
 app.factory('myUserService',['$http','$rootScope','$log',
      function($http,$rootScope,$log){
	
	var BASE_URL='http://localhost:8086/Flink_BE/'
	
	return{
		
		fetchAllUsers:function(){
			
			return $http.get(BASE_URL+'allusers')
			.then(
					
			function(response) {
				console.log("service")
				$log.info(response)
				return response.data;
				
				
			},
			null
			
			
			)
			
			
			
		}
		
		
		
		
	}
	
}
                           
])
})();