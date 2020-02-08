const pet = async (parent, args, { user, db }) => {
  if (!user) {
    throw new Error('Not Authenticated');
  }
  const { id } = args;
  const pet = await db.pet.findOne({ where: { userId: user.id, id }})
  return pet;
}

const pets = async (parent, args, { user, db }) => {
  if (!user) {
    throw new Error('Not Authenticated');
  }
  const { id } = parent;
  const pets = await db.pet.findAll({ where: { userId: id } });
  return pets;
};

module.exports = { pet, pets };
