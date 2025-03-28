'use client'

import React from 'react'

export type CallToActionNewBlockType = {
  blockType: 'call-to-action-new'
  label: string
  title: string
  buttonText: string
  buttonLink: string
}

export const CallToActionNewBlock: React.FC<CallToActionNewBlockType> = ({
  label,
  title,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-primary text-primary-content rounded-3xl p-12 md:p-16 text-center">
          {/* Метка */}
          <div className="inline-block px-4 py-2 bg-primary-content/10 text-primary-content rounded-full text-sm mb-6">
            {label}
          </div>

          {/* Заголовок */}
          <h2 className="text-4xl md:text-5xl font-normal max-w-3xl mx-auto mb-8">{title}</h2>

          {/* Кнопка */}
          <a
            href={buttonLink}
            className="btn btn-lg bg-primary-content text-primary hover:bg-primary-content/90 border-none"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
