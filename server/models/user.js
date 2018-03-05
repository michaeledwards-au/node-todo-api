const mongoose = require('mongoose');

var User = mongoose.model('user', {
  email: {
    minlength: 1,
    required: true,
    trim: true,
    type: String
  }
});

module.exports = {
  User: User
};
