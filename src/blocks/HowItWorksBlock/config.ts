import type { Block } from 'payload'

export const HowItWorksBlock: Block = {
  slug: 'how-it-works',
  labels: {
    singular: 'How It Works Block',
    plural: 'How It Works Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'how-it-works',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'How it works',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Discover the advantages and exclusive benefits',
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          defaultValue: '1',
          admin: {
            description: 'Введите номер иконки от 1 до 6',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
