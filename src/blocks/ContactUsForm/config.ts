import type { Block } from 'payload'

export const ContactUsFormBlock: Block = {
  slug: 'contact-us-form',
  labels: {
    singular: 'Contact Us Form Block',
    plural: 'Contact Us Form Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'contact-us-form',
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
      defaultValue: "Fill out this form, Let's get in touch",
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
      hasMany: false,
    },
  ],
}
