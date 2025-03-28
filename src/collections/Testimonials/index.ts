import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Имя клиента',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Местоположение',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Фото клиента',
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      label: 'Текст отзыва',
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
      label: 'Оценка',
    },
  ],
}
