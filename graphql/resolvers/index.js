const { User, user } = require('./queries/user');
const { signUp, logIn } = require('./mutations/auth');
const { addPet, deletePet } = require('./mutations/pets');
const resolvers = {
  Query: {
    user
  },
  User,
  Mutation: {
    addPet,
    deletePet,
    signUp,
    logIn
  }
};

module.exports = { resolvers };
