const mongoose = require('mongoose');

const { Schema, SchemaTypes } = mongoose;


const userSchema = Schema({
  name: {
    type: SchemaTypes.String,
    required: true
  },
  email: {
    type: SchemaTypes.String,
    unique: true,
    required: true
  },
  password: {
    type: SchemaTypes.String,
    required: true
  }
});


const user = mongoose.model('Users', userSchema);

module.exports = user;
