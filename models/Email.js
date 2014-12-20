var db = require('../db');
var emailCollection = db.collection('emails');

var Email = {
        
    findAll : function(cb){
        emailCollection.find({}).toArray(function(error,emailList){
            cb(error,emailList);
        });
    },

    findByAddress : function(address,cb){
        emailCollection.findOne({address : address},function(error,email){
            cb(error,user);
        });

    },
    
    find : function(query,cb){
        emailCollection.find(query).toArray(function(error,emailList){  // this was find one, has been changed to find.... If any other areas are affected, update this appropriately
            cb(error,emailList);
        });
    },

    
    subscribe : function (email, cb) {   // new email into db
        emailCollection.insert(email, function (error, email) {
                                    if (error) {
                                        console.log('Error subscribing for newsletters ' + error);
                                        cb(error, null);
                                    }
                                    else {
                                        cb(null, email);
                                    }
                                });
    },

     unsubscribe : function(option,query,cb){    // modify existing user details
        emailCollection.remove(option,query, function (error) {
            cb(error); 
         });
    } 
    
};

module.exports = Email;