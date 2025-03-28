import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Block',
    plural: 'Testimonials Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'testimonials',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'Testimonials',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Real feedback from our satisfied clients',
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 10,
    },
  ],
}
