import { IResolverObject } from 'graphql-tools'
import { Demo } from '../../types/demo'

const Demo: IResolverObject<Demo> = {
  nameWithHello: (parent, _, req) => {
    return 'Hello ' + parent.name
  },
}

export default Demo
