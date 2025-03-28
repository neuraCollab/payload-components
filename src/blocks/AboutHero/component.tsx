'use client'

import React from 'react'
import { Media } from '@/payload-types'

export type AboutHeroBlockType = {
  blockType: 'about-hero'
  label: string
  title: string
  images: {
    image: Media | string
  }[]
}

export const AboutHeroBlock: React.FC<AboutHeroBlockType> = ({ label, title, images }) => {
  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="text-primary mb-4">{label}</div>
          <h1 className="text-5xl font-normal max-w-4xl mx-auto">
            {title.split('Real Estate').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">Real Estate</span>}
              </React.Fragment>
            ))}
          </h1>
        </div>

        {/* Сетка изображений */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Левое изображение */}
          <div className="md:col-span-5">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={
                  typeof images[0]?.image === 'object' && images[0]?.image?.url
                    ? images[0].image.url
                    : '/placeholder.jpg'
                }
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Правая колонка с двумя изображениями */}
          <div className="md:col-span-7 space-y-6">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src={
                  typeof images[1]?.image === 'object' && images[1]?.image?.url
                    ? images[1].image.url
                    : '/placeholder.jpg'
                }
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src={
                  typeof images[2]?.image === 'object' && images[2]?.image?.url
                    ? images[2].image.url
                    : '/placeholder.jpg'
                }
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
