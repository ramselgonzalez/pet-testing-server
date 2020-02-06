const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum Species {
    BIRD
    CAT
    DOG
    HAMSTER
    SNAKE
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    age: Int!
    name: String!
    species: Species!
  }

  type Query {
    user: User
  }

  type Mutation {
    addPet(age: Int!, name: String!, species: Species!): Pet!
    deletePet(id: ID): Pet!
    logIn(email: String!, password: String!): LogInResponse!
    signUp(
      email: String!
      firstName: String!
      lastName: String!
      password: String!
    ): User!
  }

  type LogInResponse {
    token: String
    user: User
  }
`;

module.exports = { typeDefs };
