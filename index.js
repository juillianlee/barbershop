const server = require('./src/server');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listen on port ${port}`);
});
