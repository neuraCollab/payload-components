'use client'

import React from 'react'
import { MapPin } from 'lucide-react'
import { Property } from '@/payload-types'

export type PropertyHeroBlockType = {
  blockType: 'property-hero'
  property: Property
}

export const PropertyHeroBlock: React.FC<PropertyHeroBlockType> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getImageUrl = (property: Property) => {
    if (!property.images?.[0]?.image || typeof property.images[0].image !== 'object') {
      return '/placeholder.jpg'
    }
    return property.images[0].image.url || '/placeholder.jpg'
  }

  return (
    <section className="relative h-[80vh] bg-base-200">
      {/* Основное изображение */}
      <div className="absolute inset-0">
        <img
          src={getImageUrl(property)}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Информация о объекте */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            {property.address}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="text-5xl font-normal mb-6">{property.title}</h1>
              <div className="flex items-center gap-8">
                <span className="text-3xl font-normal">{formatPrice(property.price)}</span>
                <span
                  className={`badge badge-lg ${
                    property.type === 'sale' ? 'badge-success' : 'badge-info'
                  }`}
                >
                  {property.type === 'sale' ? 'For Sale' : 'For Rent'}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button className="btn btn-primary btn-lg">Contact Agent</button>
              <button className="btn btn-outline btn-lg text-white hover:text-white">
                Schedule Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
