/* eslint-disable no-unused-vars */
// Test on terminal:
// http://localhost:5000/
// http://localhost:5000/about
// http://localhost:5000/hello
// http://localhost:5000/hello/bagasnur
// http://localhost:5000/hello/bagasnur?lang=id
// http://localhost:5000/ohno

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => 'It\'s Home page',
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => `Halaman tidak dapat diakses! [method: ${request.method}]`,
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => 'Hi, I\'m bagasnur',
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => `Halaman tidak dapat diakses! [method: ${request.method}]`,
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'Anon' } = request.params;
      const { lang } = request.query;

      if (lang === 'id') {
        return `Hai, ${name}! Salam kenal >_0`;
      }

      return `Hello, ${name}! Nice to meet you >_0`;
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => 'Page Not Found',
  },
];

module.exports = routes;
