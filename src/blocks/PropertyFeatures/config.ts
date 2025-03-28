import type { Block } from 'payload'

export const PropertyFeaturesBlock: Block = {
  slug: 'property-features',
  labels: {
    singular: 'Property Features Block',
    plural: 'Property Features Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'property-features',
    },
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
      required: true,
    },
  ],
}
