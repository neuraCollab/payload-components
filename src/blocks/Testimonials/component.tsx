'use client'

import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export type TestimonialsBlockType = {
  blockType: 'testimonials'
  label: string
  title: string
  testimonials: {
    id: string
    name: string
    location: string
    text: string
    rating: number
    image: {
      url: string
    }
  }[]
}

export const TestimonialsBlock: React.FC<TestimonialsBlockType> = ({
  label,
  title,
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-4 bg-base-100/50">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="text-sm text-primary mb-2">{label}</div>
          <h2 className="text-4xl font-normal">{title}</h2>
        </div>

        {/* Слайдер отзывов */}
        <div className="relative">
          {/* Кнопки навигации */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 btn btn-circle btn-ghost"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 btn btn-circle btn-ghost"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Карточка отзыва */}
          <div className="bg-primary text-primary-content rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Фото */}
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-content/20">
                  <img
                    src={testimonials[currentIndex]?.image?.url || '/placeholder.jpg'}
                    alt={testimonials[currentIndex]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Контент */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex gap-1 justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl mb-6">{testimonials[currentIndex]?.text}</blockquote>
                <div>
                  <div className="font-medium">{testimonials[currentIndex]?.name}</div>
                  <div className="text-primary-content/70">
                    {testimonials[currentIndex]?.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Индикаторы */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
