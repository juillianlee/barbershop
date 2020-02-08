const User = require('./src/models/user');

User.create({
  name: 'Juillian Lee',
  email: 'juillian.lee@gmail.com',
  password: 'xxx'
}).then((user) => {
  console.log('usuário criado com sucesso');
  console.log(user);
}).catch((err) => {
  console.log('Falha ao criar o usuário');
  console.log(err);
});
