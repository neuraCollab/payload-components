import type { Block } from 'payload'

type Feature = {
  icon: string
  title: string
  description: string
}

export const FeatureBlock: Block = {
  slug: 'feature',
  labels: {
    singular: 'Feature Block',
    plural: 'Feature Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'feature',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Метка блока (Features)',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок блока',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      label: 'Преимущества',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          label: 'Иконка',
          options: [
            { label: 'Expert Guidance', value: 'user-check' },
            { label: 'Tailored Solutions', value: 'settings' },
            { label: 'Market Expertise', value: 'trending-up' },
            { label: 'Seamless Process', value: 'refresh-cw' },
            { label: 'Client Focused', value: 'users' },
            { label: 'Trusted Partners', value: 'shield-check' },
            { label: 'Home', value: 'home' },
            { label: 'Key', value: 'key' },
            { label: 'Location', value: 'map-pin' },
            { label: 'Phone', value: 'phone' },
            { label: 'Mail', value: 'mail' },
            { label: 'Calendar', value: 'calendar' },
            { label: 'Heart', value: 'heart' },
            { label: 'Star', value: 'star' },
            { label: 'Check Circle', value: 'check-circle' },
            { label: 'Award', value: 'award' },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Заголовок',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Описание',
        },
      ],
    },
  ],
}
