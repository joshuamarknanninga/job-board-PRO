// typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Job {
    id: ID!
    title: String!
    company: String!
    location: String
    description: String
    createdAt: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
    jobs: [Job!]!
    searchJobs(term: String!): [Job!]!
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    addJob(title: String!, company: String!, location: String, description: String): Job!
  }
`;

module.exports = typeDefs;
