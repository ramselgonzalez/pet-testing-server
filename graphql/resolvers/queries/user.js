const { pets } = require('./pets');

const user = async (parent, args, { user, db }) => {
  if (!user) {
    throw new Error('Not Authenticated');
  }
  const { id } = user;
  const currentUser = await db.user.findOne({ where: { id } });
  return currentUser;
};

const User = {
  pets
};

module.exports = { User, user };
