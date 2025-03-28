import type { Block } from 'payload'

export const VisionMissionBlock: Block = {
  slug: 'vision-mission',
  labels: {
    singular: 'Vision & Mission Block',
    plural: 'Vision & Mission Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'vision-mission',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Your trusted real estate experts:',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        "With years of local expertise, we're committed to helping you buy, sell, or invest in properties with confidence. Our personalized approach ensures every client's unique needs are met with professionalism and care.",
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'View Properties',
    },
    {
      name: 'buttonLink',
      type: 'text',
      defaultValue: '/properties',
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        {
          value: '98%',
          label: 'Satisfaction rate',
        },
        {
          value: '200+',
          label: 'Properties sold',
        },
        {
          value: '500+',
          label: 'Project done',
        },
        {
          value: '90%',
          label: 'Happy Clients',
        },
      ],
    },
  ],
}
