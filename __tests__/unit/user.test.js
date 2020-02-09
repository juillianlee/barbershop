const { setupDB } = require('../test-setup');
const User = require('../../src/models/user');

describe('Testando a coleção de usuário', () => {
  setupDB();

  it('insert', async () => {
    const user = await User.create({
      name: 'Juillian',
      email: 'juillian.lee@gmail.com',
      password: 'barbershop'
    });

    expect(user._id).toBeDefined();
    expect(user.name).toBe('Juillian');
    expect(user.email).toBe('juillian.lee@gmail.com');
    expect(user.password).toBe('barbershop');
  });
});
