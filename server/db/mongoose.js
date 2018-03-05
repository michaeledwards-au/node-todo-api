const mongoose = require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(db);

module.exports = {
  mongoose: mongoose
};
