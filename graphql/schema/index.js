const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum Species {
    BIRD
    CAT
    DOG
    HAMSTER
    SNAKE
  }

  enum ToyEnum {
    BALL
    BONE
    ROPE
    SQUEAKER
    STUFFED_ANIMAL
  }

  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    pets: [Pet]!
  }

  type Toy {
    id: ID!
    name: ToyEnum!
    description: String!
  }

  type Pet {
    id: ID!
    age: Int!
    name: String!
    species: Species!
    toys: [Toy]!
  }

  type Query {
    user: User
    pet(id: ID!): Pet!
  }

  type Mutation {
    addPet(age: Int!, name: String!, species: Species!): Pet!
    addToy(id: ID!, description: String!, name: ToyEnum!): Toy!
    deletePet(id: ID!): Pet!
    deleteToy(id: ID!): Toy!
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
