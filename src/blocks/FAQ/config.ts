import type { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      defaultValue: 'faq',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      defaultValue: 'faq',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Your questions, Answered',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Вопрос',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Ответ',
        },
      ],
      defaultValue: [
        {
          question: 'What is the first step in buying a home?',
          answer:
            "The first step in buying a home is typically getting pre-approved for a mortgage. This helps you understand your budget and shows sellers you're a serious buyer.",
        },
        {
          question: 'How much should I save for a down payment?',
          answer:
            'The traditional down payment is 20% of the purchase price, but many loan programs allow for lower down payments, some as low as 3.5% for FHA loans.',
        },
        {
          question: "What is a seller's market?",
          answer:
            "A seller's market occurs when there are more buyers than available homes, leading to higher prices and competition among buyers.",
        },
        {
          question: 'How long does it take to close on a house?',
          answer:
            'The closing process typically takes 30-45 days from contract to closing, but can vary depending on the type of loan and other factors.',
        },
        {
          question: 'What is a home inspection?',
          answer:
            "A home inspection is a detailed examination of a property's condition, including structure, systems, and components, performed by a professional inspector.",
        },
        {
          question: "How do I determine my home's value?",
          answer:
            "Your home's value can be determined through a professional appraisal, comparative market analysis (CMA), or online valuation tools.",
        },
        {
          question: 'Should I rent or buy a home?',
          answer:
            'This decision depends on various factors including your financial situation, long-term plans, local market conditions, and lifestyle preferences.',
        },
        {
          question: 'What is an HOA?',
          answer:
            'An HOA (Homeowners Association) is an organization that makes and enforces rules for properties and common areas in planned communities.',
        },
      ],
    },
  ],
}
