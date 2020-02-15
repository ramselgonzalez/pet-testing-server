const pet = (sequelize, DataTypes) => {
  const Pet = sequelize.define('pet', {
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    species: {
      type: DataTypes.ENUM,
      values: ['BIRD', 'CAT', 'DOG', 'HAMSTER', 'SNAKE'],
      allowNull: false
    }
  });

  Pet.associate = models => {
    Pet.belongsTo(models.User);
    Pet.hasMany(models.Toy);
  };

  return Pet;
};

module.exports = pet;
