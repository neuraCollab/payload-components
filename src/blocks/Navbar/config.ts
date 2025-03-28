// src/blocks/Navbar/config.tsd
import type { Block } from 'payload'

export const NavbarBlock: Block = {
  slug: 'navbar',
  interfaceName: 'NavbarBlock',
  fields: [
    {
      name: 'logoText',
      type: 'text',
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      required: true,
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
