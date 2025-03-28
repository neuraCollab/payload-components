'use client'

import React from 'react'
import { Media } from '@/payload-types'
import { Wifi, Shield, Dumbbell, Sparkles } from 'lucide-react'

type Amenity = {
  icon: 'wifi' | 'shield' | 'gym' | 'clean'
  title: string
}

export type AmenitiesBlockType = {
  blockType: 'amenities'
  label: string
  title: string
  image: Media | string
  amenities: Amenity[]
}

const ICONS = {
  wifi: Wifi,
  shield: Shield,
  gym: Dumbbell,
  clean: Sparkles,
}

export const AmenitiesBlock: React.FC<AmenitiesBlockType> = ({
  label,
  title,
  image,
  amenities,
}) => {
  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        {/* Верхняя часть */}
        <div className="mb-12">
          <div className="text-sm text-primary mb-2">{label}</div>
          <h2 className="text-4xl font-normal max-w-2xl">{title}</h2>
        </div>

        {/* Основной контент */}
        <div className="relative">
          {/* Изображение */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src={typeof image === 'object' && image?.url ? image.url : '/placeholder.jpg'}
              alt="Luxury amenities"
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Список удобств */}
          <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-3xl p-8 w-80">
            <div className="text-primary font-medium mb-4">Including:</div>
            <div className="space-y-4">
              {amenities.map((amenity, index) => {
                const Icon = ICONS[amenity.icon] || Sparkles

                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="font-medium">{amenity.title}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
