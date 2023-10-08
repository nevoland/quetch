import { split } from 'lodash'
import { getGlobal, EMPTY_OBJECT } from 'realue'

import { QueryError } from '../errors/QueryError'

function getHostname() {
  const { location } = getGlobal()
  return !location ? 'localhost' : location.hostname
}

function isLocal(url: string, hostname: string) {
  return (
    url &&
    ((url[0] === '/' && hostname === 'localhost') ||
      split(split(url, '/')[2], ':')[0] === 'localhost')
  )
}

type request = (query: {}) => Promise<{}>

type middleware = (next: request) => request

export function retry({
  amount = 5,
  delay = 1000,
  delayDelta = 500,
} = EMPTY_OBJECT): middleware {
  /*
  Retries a failed query call up to `amount` times, with a given `delay` in milliseconds at ±`delayDelta` milliseconds.
  Note that an `amount` set to `Infinity` results in indefinitely trying to resolve a query call.
  Only instances of `QueryError` will result in new tries. Other errors will propagate immediately.
  */
  delay -= delayDelta
  delayDelta *= 2
  const { navigator, window } = getGlobal()
  const hostname = getHostname()
  return (next) => (query) => {
    let errorsLeft = amount
    const fetch = () =>
      next(query).catch((error) => {
        if (
          !(error instanceof QueryError) ||
          error.status < 500 ||
          isLocal(query.url, hostname)
        ) {
          throw error
        }
        if (window && navigator && !navigator.onLine) {
          errorsLeft = amount
          return waitUntil(on(window, 'online'), query.signal).then(fetch)
        }
        if (--errorsLeft > 0) {
          return waitFor(
            delay + ((Math.random() * delayDelta) | 0),
            query.signal,
          ).then(fetch)
        }
        throw error
      })
    return fetch()
  }
}
