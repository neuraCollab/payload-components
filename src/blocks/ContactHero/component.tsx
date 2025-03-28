'use client'

import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export type ContactHeroBlockType = {
  blockType: 'contact-hero'
  label: string
  title: string
  image: {
    url: string
  }
  email: string
  phone: string
  location: string
}

export const ContactHeroBlock: React.FC<ContactHeroBlockType> = ({
  label,
  title,
  image,
  email,
  phone,
  location,
}) => {
  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="text-sm text-primary mb-2">{label}</div>
          <h2 className="text-4xl font-normal">
            {title.split('assistance').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">assistance</span>}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Основной контент */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Изображение */}
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <img
              src={image?.url || '/placeholder.jpg'}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Контактная информация */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
            <div className="flex flex-col md:flex-row gap-8 justify-center text-white">
              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{email}</span>
              </a>

              {/* Телефон */}
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{phone}</span>
              </a>

              {/* Локация */}
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
