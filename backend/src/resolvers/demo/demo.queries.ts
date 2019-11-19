import { IResolverObject } from 'graphql-tools'
import { GetDemoParams } from '../../types/demo'

const demo: IResolverObject = {
  getDemo: (_, { id }: GetDemoParams, req) => {
    // query demo
    const mockQueryDemo = {
      id,
      name: 'Map',
    }
    return mockQueryDemo
  },
}

export default demo
