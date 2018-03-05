const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// }, (e) => {
//   console.log('Unable to remove todos', e);
// });

Todo.findOneAndRemove({
  _id: '5a9ccc4f1bb45b045d1b64bb'
}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('5a9ccb961bb45b045d1b6442').then((todo) => {
//   console.log(todo);
// });
