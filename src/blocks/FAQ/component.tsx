'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

export type FAQBlockType = {
  blockType: 'faq'
  label: string
  title: string
  items: FAQItem[]
}

export const FAQBlock: React.FC<FAQBlockType> = ({ label, title, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-4xl">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="text-sm text-primary mb-2">{label}</div>
          <h2 className="text-4xl font-normal">
            {title.split('Answered').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">Answered</span>}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* FAQ аккордеон */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-200/50 hover:bg-base-200 transition-colors"
            >
              <input
                type="radio"
                name="faq-accordion"
                checked={openIndex === index}
                onChange={() => toggleItem(index)}
              />
              <div className="collapse-title text-xl font-normal pr-12">{item.question}</div>
              <div className="collapse-content">
                <p className="text-base-content/70 mt-2 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
