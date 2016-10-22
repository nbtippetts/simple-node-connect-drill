angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    return $http({
      method: 'GET',
      url: '/api/chats'
    });
  }

  this.addChats = function(chat){

    $http({
      url: 'api/chats',
      method: 'POST',
      data: chat
    })
  }

  this.deleteChats = function(){
    return $http({
      method: 'DELETE',
      url: '/api/chats'
    })
  }

  this.setScreenname = function(screenname){
    return $http({
      method: 'POST',
      url: '/api/screenname',
      data: {
        screenname: screenname
      }
    })
  }
});
