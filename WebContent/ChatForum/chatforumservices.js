app.service("ChatForumService", ['$q',function($q, $timeout) {
    
    var service = {}, 
    listener = $q.defer(), 
    socket = {client: null,stomp: null};
 
    service.RECONNECT_TIMEOUT = 30000;
    service.SOCKET_URL = "/Flink_BE/chat_forum";
    service.CHAT_TOPIC = "/topic/message";
    service.CHAT_BROKER = "/app/chat_forum";
    
    service.receive = function() {
      return listener.promise;
      
    };

    service.send = function(message,username) {
      var id = Math.floor(Math.random() * 1000000);
      var time= new Date();
       socket.stomp.send(service.CHAT_BROKER, {
        priority:9
      }, 
      JSON.stringify({
        message: message,
        id: id,
        time:time,
        username:username
      }));
    };
    
    var reconnect = function() {
      $timeout(function() {
        initialize();
      }, this.RECONNECT_TIMEOUT);
    };
    
    var getMessage = function(data) {
        var time= new Date();

      var message = JSON.parse(data),
      out = {};
      out.message = message.message;
      out.username=message.username
      out.time =  time;
    
      return out;
    };
    
    var startListener = function() {
      socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
        listener.notify(getMessage(data.body));
      });
    };
    
    var initialize = function() {
      socket.client = new SockJS(service.SOCKET_URL);
      socket.stomp = Stomp.over(socket.client);
      socket.stomp.connect({}, startListener);
      socket.stomp.onclose = reconnect;
    };
    
    initialize();
    return service;
  }]);