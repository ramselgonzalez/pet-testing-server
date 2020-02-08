const { User, user } = require('./queries/user');
const { pet } = require('./queries/pets');
const { signUp, logIn } = require('./mutations/auth');
const { addPet, deletePet } = require('./mutations/pets');
const resolvers = {
  Query: {
    pet,
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
