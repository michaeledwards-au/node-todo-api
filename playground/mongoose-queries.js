const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5a9cae9a1bb45b045d1b5b0f';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log('User by Id', user);
}).catch((e) => {
  console.log('Unable to find user');
});

// var id = '5a9caa801dd4f518f14b832b';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo)
// }).catch((e) => console.log(e));
