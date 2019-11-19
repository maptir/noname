import { gql } from 'apollo-server-core'
import { readFileSync } from 'fs'

const demo = readFileSync(`${__dirname}/demo.gql`, 'utf8')

const query = `
  type Query {
    testQuery: String
  }
`

const mutation = `
  type Mutation {
    testMutation(test : String): String
  }
`

export default [query, mutation, demo]
