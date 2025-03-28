import type { Block } from 'payload'

export const VisionBlock: Block = {
  slug: 'vision',
  labels: {
    singular: 'Vision Block',
    plural: 'Vision Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Подзаголовок',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Текст кнопки',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Ссылка кнопки',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Элементы',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          label: 'Иконка',
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
