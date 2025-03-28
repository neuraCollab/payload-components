import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  imageURL: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
  fields: [
    {
      name: 'headline',
      label: 'Заголовок',
      type: 'text',
      required: true,
    },
    {
      name: 'highlight',
      label: 'Выделенное слово',
      type: 'text',
    },
    {
      name: 'subheadline',
      label: 'Подзаголовок',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Изображение',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
