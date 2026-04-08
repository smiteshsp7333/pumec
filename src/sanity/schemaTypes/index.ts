import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { post } from './post'
import { team } from './team'
import { career } from './career'
import { testimonial } from './testimonial'
import { clientLogo } from './client'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, post, team, career, testimonial, clientLogo],
}
