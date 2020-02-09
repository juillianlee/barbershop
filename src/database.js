const mongoose = require('mongoose');

const {
  DB_URL, DB_USER, DB_PASSWORD, DB_NAME
} = process.env;

const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true,
  useCreateIndex: true
};

module.exports = {
  connect() {
    mongoose.connect(uri, options);
    mongoose.Promise = global.Promise;
  }
};
