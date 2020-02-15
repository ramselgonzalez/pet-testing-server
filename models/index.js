const Sequelize = require('sequelize');
const db = {};

db.sequelize = new Sequelize('petlibrary', 'postgres', 'rlgpg100328', {
  dialect: 'postgres'
});

const User = db.sequelize.import('./user');
const Pet = db.sequelize.import('./pet');
const Toy = db.sequelize.import('./toy');

User.associate({ Pet });
Pet.associate({ User, Toy });
Toy.associate({ Pet });

db[User.name] = User;
db[Pet.name] = Pet;
db[Toy.name] = Toy;

module.exports = db;
