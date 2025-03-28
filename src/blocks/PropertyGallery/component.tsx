'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Property, Media } from '@/payload-types'

export type PropertyGalleryBlockType = {
  blockType: 'property-gallery'
  property: Property
}

export const PropertyGalleryBlock: React.FC<PropertyGalleryBlockType> = ({ property }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!property.images || property.images.length === 0) {
    return null
  }

  const getImageUrl = (image: { image: Media | number } | undefined) => {
    if (!image || typeof image.image === 'number') {
      return ''
    }
    return image.image.url || ''
  }

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-normal mb-8">Property Gallery</h2>

        {/* Основное изображение */}
        <div className="relative w-full h-[600px] mb-4 rounded-lg overflow-hidden">
          <Image
            src={getImageUrl(property.images[selectedImage])}
            alt={`Property image ${selectedImage + 1}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Миниатюры */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {property.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-full aspect-square rounded-lg overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-primary' : ''
              }`}
            >
              <Image
                src={getImageUrl(image)}
                alt={`Property thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
