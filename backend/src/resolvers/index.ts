import { DemoFields as Demo, DemoMutations, DemoQueries } from './demo'

const query = {
  ...DemoQueries,
}

const mutation = {
  ...DemoMutations,
}

export default {
  Query: query,
  Mutation: mutation,
  Demo,
}
