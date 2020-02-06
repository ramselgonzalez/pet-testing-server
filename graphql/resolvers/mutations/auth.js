const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp = async (parent, args, { db }) => {
  const { email, firstName, lastName, password } = args;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await db.user.create({
    email,
    firstName,
    lastName,
    password: hashedPassword
  });

  return user;
};

const logIn = async (parent, args, { db }) => {
  const { email, password } = args;
  const user = await db.user.findOne({ where: { email } });

  if (!user) {
    throw new Error('Invalid Login');
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error('Invalid Login');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    'pet-testing-secret',
    { expiresIn: '30d' }
  );

  return { token, user };
};

module.exports = { signUp, logIn };
