import type { Block } from 'payload'

export const AmenitiesBlock: Block = {
  slug: 'amenities',
  labels: {
    singular: 'Amenities Block',
    plural: 'Amenities Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'amenities',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'Amenities',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Discover exceptional amenities for a luxurious lifestyle',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'amenities',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            {
              label: 'High-speed Network',
              value: 'wifi',
            },
            {
              label: 'Security & Work',
              value: 'shield',
            },
            {
              label: 'Gym and Store',
              value: 'gym',
            },
            {
              label: 'Cleanliness',
              value: 'clean',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        {
          icon: 'clean',
          title: 'Cleanliness strictly',
        },
        {
          icon: 'wifi',
          title: 'High speed Network',
        },
        {
          icon: 'shield',
          title: 'Full time security & work',
        },
        {
          icon: 'gym',
          title: 'Gym and Store',
        },
      ],
    },
  ],
}
