// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  //deleteMany()
  // db.collection('Todos').deleteMany({text:'Eat breakfast'}).then((result)=>{
  //   console.log(result);
  // });

  // //deleteOne()
  // db.collection('Todos').deleteOne({text:'Eat breakfast'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete()
  // db.collection('Todos').findOneAndDelete({text:'Eat breakfast'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').deleteOne({name:'Ibrahim Bdawie'}).then((result)=>{
    console.log(result);
  });
  db.collection('Users').findOneAndDelete({_id:new ObjectID('592af95163ac892488967fdf')}).then((result)=>{
    console.log(result);
  });

  // db.close();
});
