import { IResolverObject } from 'graphql-tools'
import { CreateDemoParams } from '../../types/demo'

const demo: IResolverObject = {
  createDemo: (_, { name }: CreateDemoParams, req) => {
    // create demo
    const mockCreatedDemo = {
      id: 1,
      name,
    }
    return mockCreatedDemo
  },
}

export default demo
