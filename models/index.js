const Sequelize = require('sequelize');
const db = {};

db.sequelize = new Sequelize('petlibrary', 'postgres', 'rlgpg100328', {
  dialect: 'postgres'
});

const User = db.sequelize.import('./user');
const Pet = db.sequelize.import('./pet');
User.associate({ Pet });
Pet.associate({ User });

db[User.name] = User;
db[Pet.name] = Pet;

module.exports = db;
