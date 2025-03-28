'use client'

import React from 'react'
import { Bed, Bath, Maximize, Home, Key, Car } from 'lucide-react'
import { Property } from '@/payload-types'

export type PropertyFeaturesBlockType = {
  blockType: 'property-features'
  property: Property
}

const features = [
  { icon: Home, label: 'Property Type', value: 'Single Family' },
  { icon: Key, label: 'Year Built', value: '2020' },
  { icon: Car, label: 'Garage', value: '2 Cars' },
]

export const PropertyFeaturesBlock: React.FC<PropertyFeaturesBlockType> = ({ property }) => {
  if (!property) {
    return (
      <section className="py-16 bg-base-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-normal mb-4">No Property Selected</h2>
            <p className="text-base-content/70">Please select a property to view its features.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-normal mb-8">Property Details</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Основные характеристики */}
          <div className="card bg-base-200">
            <div className="card-body items-center text-center">
              <Bed className="w-8 h-8 text-primary mb-2" />
              <div className="text-sm text-base-content/70">Bedrooms</div>
              <div className="text-xl font-medium">{property.bedrooms}</div>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body items-center text-center">
              <Bath className="w-8 h-8 text-primary mb-2" />
              <div className="text-sm text-base-content/70">Bathrooms</div>
              <div className="text-xl font-medium">{property.bathrooms}</div>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body items-center text-center">
              <Maximize className="w-8 h-8 text-primary mb-2" />
              <div className="text-sm text-base-content/70">Total Area</div>
              <div className="text-xl font-medium">{property.area} sq.ft</div>
            </div>
          </div>

          {/* Дополнительные характеристики */}
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-200">
              <div className="card-body items-center text-center">
                <feature.icon className="w-8 h-8 text-primary mb-2" />
                <div className="text-sm text-base-content/70">{feature.label}</div>
                <div className="text-xl font-medium">{feature.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Особенности */}
        {property.features && property.features.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-normal mb-6">Features & Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.features.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{item.feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Описание */}
        {property.description && (
          <div className="mt-12">
            <h3 className="text-2xl font-normal mb-6">Description</h3>
            <div className="prose max-w-none">
              <div className="text-base-content/70 leading-relaxed">
                {typeof property.description === 'string'
                  ? property.description
                  : (property.description as any)?.root?.children?.[0]?.text || ''}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
