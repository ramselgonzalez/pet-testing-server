const addPet = async (parent, args, { user, db }) => {
  if (!user) {
    throw new Error('Not Authenticated');
  }
  const { id } = user;
  const { age, name, species } = args;

  try {
    const pet = await db.pet.create({
      userId: id,
      age,
      name,
      species
    });
    return pet;
  } catch (err) {
    throw err;
  }
};

const deletePet = async (parent, args, { user, db }) => {
  if (!user) {
    throw new Error('Not Authenticated');
  }
  const { id } = args;
  try {
    const petToDelete = await db.pet.findOne({ where: { id } });
    if (!petToDelete) {
      throw new Error('No pet was found with a matching id.');
    }
    await db.pet.destroy({ where: { id: petToDelete.id } });
    return petToDelete;
  } catch (err) {
    throw err;
  }
};

module.exports = { addPet, deletePet };
