import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'

import resolvers from './resolvers'
import typeDefs from './typeDefs'
// // Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `

// // Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// }

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
)
