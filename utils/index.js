const jwt = require('jsonwebtoken');

const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, 'pet-testing-secret');
    }
    return null;
  } catch (err) {
    return null;
  }
};

module.exports = { getUser };
