const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`SERVER: ${server.info.uri} started!`);
};

init();
