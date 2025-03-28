import type { Block } from 'payload'

export const AboutHeroBlock: Block = {
  slug: 'about-hero',
  labels: {
    singular: 'About Hero Block',
    plural: 'About Hero Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'about-hero',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'About us',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Connect with our experts and bring your Real Estate ideas to life',
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
