import type { Block } from 'payload'

export const ContactHeroBlock: Block = {
  slug: 'contact-hero',
  labels: {
    singular: 'Contact Hero Block',
    plural: 'Contact Hero Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'contact-hero',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'Contact',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Get in touch with us today for expert assistance',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Фоновое изображение',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'testing@gmail.com',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      defaultValue: '+ 123 45 67 89',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      defaultValue: 'Doha, Qatar',
    },
  ],
}
