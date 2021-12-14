// `auth.js`: Update the auth middleware function to work with the GraphQL API.

// took this from lesson 24



const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };

    // give a little room to breathe- code works
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

// these errors are void
// Require stack:
// - C:\Users\jaime\OneDrive\Desktop\BOOTCAMP HOMEWORK\homework 21\develop\server\schemas\resolvers.js
// - C:\Users\jaime\OneDrive\Desktop\BOOTCAMP HOMEWORK\homework 21\develop\server\schemas\index.js
// - C:\Users\jaime\OneDrive\Desktop\BOOTCAMP HOMEWORK\homework 21\develop\server\server.js