const mongoose = require('mongoose');

var Todo = mongoose.model('todo', {
  completed: {
    default: false,
    type: Boolean
  },
  completedAt: {
    default: null,
    type: Number
  },
  text: {
    minlength: 1,
    required: true,
    trim: true,
    type: String
  }
});

module.exports = {
  Todo: Todo
};
