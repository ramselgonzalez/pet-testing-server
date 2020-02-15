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
    const pet = await db.pet.findOne({ where: { id } });
    if (!pet) {
      throw new Error('No pet was found with a matching id.');
    }
    await db.pet.destroy({ where: { id: pet.id } });
    return pet;
  } catch (err) {
    throw err;
  }
};

const addToy = async (parent, args, { user, db }) => {
  if (!user) {
    throw new Error('Not Authenticated');
  }
  const { id, description, name } = args;
  try {
    const pet = await db.pet.findOne({
      where: { id, userId: user.id }
    });
    if (!pet) {
      throw new Error('This pet is not associated with the current user.');
    }
    const toy = await db.toy.create({ petId: id, description, name });
    return toy;
  } catch (err) {
    throw err;
  }
};

const deleteToy = async (parent, args, { user, db }) => {
  if (!user) {
    throw new Error('Not authenticated');
  }
  const { id } = args;
  try {
    const toy = await db.toy.findOne({ where: { id } });
    const pet = await db.pet.findOne({
      where: { id: toy.petId, userId: user.id }
    });
    if (!pet) {
      throw new Error('This toy/pet is not associated with the current user.');
    }
    await db.toy.destroy({ where: { id } });
    return toy;
  } catch (err) {
    throw err;
  }
};

module.exports = { addPet, deletePet, addToy, deleteToy };
