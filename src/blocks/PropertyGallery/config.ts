import type { Block } from 'payload'

export const PropertyGalleryBlock: Block = {
  slug: 'property-gallery',
  labels: {
    singular: 'Property Gallery Block',
    plural: 'Property Gallery Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      defaultValue: 'property-gallery',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
      required: true,
    },
  ],
}
