import type { Block } from 'payload'

export const PropertyHeroBlock: Block = {
  slug: 'property-hero',
  labels: {
    singular: 'Property Hero Block',
    plural: 'Property Hero Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'property-hero',
    },
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
      required: true,
    },
  ],
}
