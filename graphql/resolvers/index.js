const { User, user } = require('./queries/user');
const { Pet, pet } = require('./queries/pets');
const { signUp, logIn } = require('./mutations/auth');
const { addPet, deletePet, addToy, deleteToy } = require('./mutations/pets');

const resolvers = {
  Query: {
    pet,
    user
  },
  User,
  Pet,
  Mutation: {
    addPet,
    addToy,
    deletePet,
    deleteToy,
    signUp,
    logIn
  }
};

module.exports = { resolvers };
