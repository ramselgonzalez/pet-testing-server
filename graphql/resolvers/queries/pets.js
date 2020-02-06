const pets = async (parent, args, { user, db }) => {
  if (!user) {
    throw new Error('Not Authenticated');
  }
  const { id } = parent;
  const pets = await db.pet.findAll({ where: { userId: id } });
  return pets;
};

module.exports = { pets };
