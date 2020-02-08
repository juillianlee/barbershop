const mongoose = require('mongoose');

const {
  DB_URL, DB_USER, DB_PASSWORD, DB_NAME
} = process.env;

const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true,
};

mongoose.connect(uri, options);
mongoose.Promise = global.Promise;

module.exports = mongoose;

// criar o usuário para o banco de dados
// use barbershop
// db.createUser(
// {
//   user: "barbershop",
//   pwd: "barbershop",
//     roles: [
//       { role: "readWrite", db: "barbershop" },
//       { role: "dbAdmin", db: "barbershop" }
//     ]
// })
