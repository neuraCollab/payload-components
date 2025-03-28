import type { Block } from 'payload'

export const CallToActionNewBlock: Block = {
  slug: 'call-to-action-new',
  labels: {
    singular: 'Call to Action Block',
    plural: 'Call to Action Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'call-to-action-new',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'Want to Book a Call?',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Ready to make your step in real estate? Book Now.',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'View Properties',
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      defaultValue: '/properties',
    },
  ],
}
