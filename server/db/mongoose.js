var mongoose =require('mongoose');

mongoose.Promise = global.Promise;
const mlabURI = "mongodb://bdawie:admin123@ds155192.mlab.com:55192/todo-api";
mongoose.connect( mlabURI || "mongodb://localhost:27017/TodoApp");

module.exports={mongoose};
