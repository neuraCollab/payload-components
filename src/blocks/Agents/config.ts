import type { Block } from 'payload'

export const AgentsBlock: Block = {
  slug: 'agents',
  labels: {
    singular: 'Agents Block',
    plural: 'Agents Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'agents',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'Agents',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Meet our exceptional agents for a seamless experience',
    },
    {
      name: 'agents',
      type: 'relationship',
      relationTo: 'agents',
      hasMany: true,
      required: true,
      minRows: 1,
      maxRows: 6,
    },
  ],
}
