const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// var id = '595a4e0110404f0f7c4ac1e1';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
//
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Todo not found');
//   }
//   console.log('Todo',todo);
// });

var id = '595abf1f1624f9fac7b038ac';

User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log("User",user);
}).catch((e)=>console.log(e));
