import type { CollectionConfig } from 'payload'

export const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Название объекта',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title.toLowerCase().replace(/\s+/g, '-')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'address',
      type: 'text',
      required: true,
      label: 'Адрес',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Цена',
      min: 0,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Продажа',
          value: 'sale',
        },
        {
          label: 'Аренда',
          value: 'rent',
        },
      ],
      label: 'Тип предложения',
    },
    {
      name: 'bedrooms',
      type: 'number',
      required: true,
      label: 'Количество спален',
      min: 0,
    },
    {
      name: 'bathrooms',
      type: 'number',
      required: true,
      label: 'Количество ванных',
      min: 0,
    },
    {
      name: 'area',
      type: 'number',
      required: true,
      label: 'Площадь (кв.фт)',
      min: 0,
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      label: 'Изображения',
      minRows: 1,
      maxRows: 10,
      labels: {
        singular: 'Изображение',
        plural: 'Изображения',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Описание',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Особенности',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        {
          label: 'Активно',
          value: 'active',
        },
        {
          label: 'Продано/Сдано',
          value: 'sold',
        },
        {
          label: 'Черновик',
          value: 'draft',
        },
      ],
      label: 'Статус объекта',
    },
  ],
}
