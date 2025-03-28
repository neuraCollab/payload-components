import type { Block } from 'payload'

export const BlogBlock: Block = {
  slug: 'blog',
  labels: {
    singular: 'Blog Block',
    plural: 'Blog Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'blog',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок блока',
      defaultValue: 'Expert advice and market updates on real estate',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
      label: 'Подзаголовок блока',
      defaultValue: 'Blogs',
    },
    {
      name: 'posts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      required: false,
      label: 'Выберите посты',
      admin: {
        description: 'Выберите посты для отображения в блоке',
      },
    },
    {
      name: 'showAllLink',
      type: 'text',
      label: 'Ссылка на все посты',
      defaultValue: '/posts',
      admin: {
        description: 'Например: /posts',
      },
    },
    {
      name: 'itemsPerPage',
      type: 'number',
      required: true,
      defaultValue: 3,
      min: 3,
      max: 12,
      label: 'Количество постов на странице',
      admin: {
        description: 'Минимум 3, максимум 12 постов',
      },
    },
  ],
}
