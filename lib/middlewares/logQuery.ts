import { identity } from 'lodash'

import { middleware, requester, Query, Result } from '../../src'

export function logQuery(title = 'Query'): middleware {
  /*
  Logs the outgoing query and the incoming result or the error.
  */
  if (process.env.NODE_ENV === 'production') {
    return identity
  }
  return (next: requester) => (query: Query): Promise<Result> => {
    /* eslint-disable no-console */
    console.group(title)
    console.info('query', query)
    return next(query).then(
      (result) => {
        console.log('result', result)
        console.groupEnd()
        return result
      },
      (error) => {
        console.log('error', error)
        console.groupEnd()
        throw error
      },
    )
    /* eslint-enable no-console */
  }
}
