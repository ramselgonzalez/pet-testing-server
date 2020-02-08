const Sequelize = require('sequelize');
const db = {};

db.sequelize = new Sequelize('postgres://lola:d7y8jgdf903@localhost/ramselgonzalez', {
  dialect: 'postgres'
});

const User = db.sequelize.import('./user');
const Pet = db.sequelize.import('./pet');
User.associate({ Pet });
Pet.associate({ User });

db[User.name] = User;
db[Pet.name] = Pet;

module.exports = db;
