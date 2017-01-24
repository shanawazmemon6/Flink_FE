app.controller("ChatForumCtrl", ['ChatForumService',function(ChatForumService) {
  
	var cht=this;
	
	cht.messages = [];
	cht.message = "";
	cht.max = 140;

	cht.addMessage = function(username) {
		ChatForumService.send(cht.message,username);
    cht.message = "";
  };

  ChatForumService.receive().then(null, null, function(message) {
	  cht.messages.push(message);
  });
}]);