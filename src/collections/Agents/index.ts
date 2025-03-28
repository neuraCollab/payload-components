import type { CollectionConfig } from 'payload'

export const Agents: CollectionConfig = {
  slug: 'agents',
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
      label: 'Имя агента',
    },
    {
      name: 'position',
      type: 'text',
      required: true,
      label: 'Должность',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Фото агента',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Телефон',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Социальные сети',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
