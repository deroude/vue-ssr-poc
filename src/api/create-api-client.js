import { createClient } from 'contentful'

export function createAPI ( config) {
  return createClient(config)
}
