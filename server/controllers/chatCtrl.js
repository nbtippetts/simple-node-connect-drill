var chats = [];
module.exports = {

  getChats:function(req,res){
    // TODO write getChats
    res.send(chats);
  },
  postChats:function(req,res){
    // TODO write postChats
    console.log('that is chats array', chats)
    chats.push(req.body);
      res.status(200).send(chats)
  },
  deleteChats:function(req, res){
    chats = [];
    res.status(200).send('deleted')
  }
}
