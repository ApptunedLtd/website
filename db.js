var mongo =  require('mongodb');
var dbHost = '127.0.0.1';
var dbPort = mongo.Connection.DEFAULT_PORT;
db  = new mongo.Db('co-db', new mongo.Server('ds027771.mongolab.com','27771',{safe:false}));
db.open(function (error, db) {
    if (error) {
        console.log('Error: ' + error.message);
    }
    else {
        console.log('Connection To DB successfull!');
        //Authenticate
        db.authenticate("admin", "admin", function (err, res) {
            console.log("Successfully Authenticated!");
        });
    }
});
module.exports = db;