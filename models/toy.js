const toy = (sequelize, DataTypes) => {
  const Toy = sequelize.define('toy', {
    name: {
      type: DataTypes.ENUM,
      values: ['BALL', 'BONE', 'ROPE', 'SQUEAKER', 'STUFFED_ANIMAL'],
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Toy.associate = models => {
    Toy.belongsTo(models.Pet);
  };

  return Toy;
};

module.exports = toy;
