const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models');
const { typeDefs, resolvers } = require('./graphql');
const { getUser } = require('./utils');

const app = express();
const path = '/graphql';
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = getUser(token);
    return { user, db };
  }
});

server.applyMiddleware({ app, path });

const force = false;
db.sequelize.sync({ force }).then(async () => {
  app.listen({ port }, () => {
    console.log(
      `Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
});
