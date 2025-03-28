'use client'
import React, { useState, useMemo } from 'react'
import { MapPin, Bed, Bath, Maximize, Search } from 'lucide-react'
import { Media, Property } from '@/payload-types'

type PropertyBlockType = {
  blockType: 'properties'
  title: string
  showAllLink?: string
  properties: Property[]
  layout: 'grid' | 'list'
  itemsPerPage: number
  enableFilters: boolean
  filters?: {
    priceRange: boolean
    propertyType: boolean
    bedrooms: boolean
    bathrooms: boolean
    area: boolean
  }
}

type Filters = {
  type: string
  priceRange: string
  bedrooms: string
  bathrooms: string
  area: string
  search: string
}

export const PropertiesBlock: React.FC<PropertyBlockType> = ({
  title,
  showAllLink,
  properties = [],
  layout = 'grid',
  itemsPerPage = 6,
  enableFilters,
  filters,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilters, setActiveFilters] = useState<Filters>({
    type: 'all',
    priceRange: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    area: 'all',
    search: '',
  })

  // Вычисляем уникальные значения для фильтров
  const filterOptions = useMemo(() => {
    return {
      bedrooms: [...new Set(properties.map((p) => p.bedrooms))].sort((a, b) => a - b),
      bathrooms: [...new Set(properties.map((p) => p.bathrooms))].sort((a, b) => a - b),
      area: [
        { label: 'All', value: 'all' },
        { label: '< 1000 sq.ft', value: '0-1000' },
        { label: '1000-2000 sq.ft', value: '1000-2000' },
        { label: '2000-3000 sq.ft', value: '2000-3000' },
        { label: '> 3000 sq.ft', value: '3000+' },
      ],
      price: [
        { label: 'All', value: 'all' },
        { label: '< $200,000', value: '0-200000' },
        { label: '$200,000 - $500,000', value: '200000-500000' },
        { label: '$500,000 - $1,000,000', value: '500000-1000000' },
        { label: '> $1,000,000', value: '1000000+' },
      ],
    }
  }, [properties])

  // Фильтрация свойств
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      if (!property?.title) return false

      // Поиск по названию
      if (
        activeFilters.search &&
        !property.title.toLowerCase().includes(activeFilters.search.toLowerCase())
      ) {
        return false
      }

      // Тип недвижимости
      if (activeFilters.type !== 'all' && property.type !== activeFilters.type) {
        return false
      }

      // Количество спален
      if (
        activeFilters.bedrooms !== 'all' &&
        property.bedrooms !== parseInt(activeFilters.bedrooms)
      ) {
        return false
      }

      // Количество ванных
      if (
        activeFilters.bathrooms !== 'all' &&
        property.bathrooms !== parseInt(activeFilters.bathrooms)
      ) {
        return false
      }

      // Площадь
      if (activeFilters.area !== 'all') {
        const parts = activeFilters.area.split('-')
        const minStr = parts[0]
        const maxStr = parts[1]

        if (minStr) {
          const min = parseInt(minStr)
          if (!isNaN(min)) {
            if (maxStr) {
              const max = parseInt(maxStr)
              if (!isNaN(max)) {
                if (property.area < min || property.area > max) return false
              }
            } else {
              if (property.area < min) return false
            }
          }
        }
      }

      // Ценовой диапазон
      if (activeFilters.priceRange !== 'all') {
        const parts = activeFilters.priceRange.split('-')
        const minStr = parts[0]
        const maxStr = parts[1]

        if (minStr) {
          const min = parseInt(minStr)
          if (!isNaN(min)) {
            if (maxStr) {
              const max = parseInt(maxStr)
              if (!isNaN(max)) {
                if (property.price < min || property.price > max) return false
              }
            } else {
              if (property.price < min) return false
            }
          }
        }
      }

      return true
    })
  }, [properties, activeFilters])

  // Пагинация
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedProperties = filteredProperties.slice(startIndex, endIndex)

  // Сброс фильтров
  const resetFilters = () => {
    setActiveFilters({
      type: 'all',
      priceRange: 'all',
      bedrooms: 'all',
      bathrooms: 'all',
      area: 'all',
      search: '',
    })
    setCurrentPage(1)
  }

  return (
    <section className="container mx-auto px-4 py-12 font-satoshi">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-normal">{title}</h2>
        {showAllLink && (
          <a href={showAllLink} className="btn btn-sm btn-neutral font-normal">
            All properties
          </a>
        )}
      </div>

      {enableFilters && (
        <div className="mb-8 space-y-4">
          {/* Поиск */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search properties..."
              className="input input-bordered w-full pr-10"
              value={activeFilters.search}
              onChange={(e) => setActiveFilters({ ...activeFilters, search: e.target.value })}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 w-5 h-5" />
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap gap-4">
            {/* Тип недвижимости */}
            <select
              className="select select-bordered font-normal"
              value={activeFilters.type}
              onChange={(e) => setActiveFilters({ ...activeFilters, type: e.target.value })}
            >
              <option value="all">All Types</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>

            {/* Спальни */}
            <select
              className="select select-bordered font-normal"
              value={activeFilters.bedrooms}
              onChange={(e) => setActiveFilters({ ...activeFilters, bedrooms: e.target.value })}
            >
              <option value="all">All Bedrooms</option>
              {filterOptions.bedrooms.map((num) => (
                <option key={num} value={num}>
                  {num} Bedrooms
                </option>
              ))}
            </select>

            {/* Ванные */}
            <select
              className="select select-bordered font-normal"
              value={activeFilters.bathrooms}
              onChange={(e) => setActiveFilters({ ...activeFilters, bathrooms: e.target.value })}
            >
              <option value="all">All Bathrooms</option>
              {filterOptions.bathrooms.map((num) => (
                <option key={num} value={num}>
                  {num} Bathrooms
                </option>
              ))}
            </select>

            {/* Площадь */}
            <select
              className="select select-bordered font-normal"
              value={activeFilters.area}
              onChange={(e) => setActiveFilters({ ...activeFilters, area: e.target.value })}
            >
              {filterOptions.area.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Цена */}
            <select
              className="select select-bordered font-normal"
              value={activeFilters.priceRange}
              onChange={(e) => setActiveFilters({ ...activeFilters, priceRange: e.target.value })}
            >
              {filterOptions.price.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Кнопка сброса */}
            <button onClick={resetFilters} className="btn btn-outline btn-sm">
              Reset Filters
            </button>
          </div>

          {/* Результаты поиска */}
          <div className="text-sm text-base-content/70">
            Found {filteredProperties.length} properties
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {filteredProperties.length > itemsPerPage && (
        <div className="flex justify-center mt-8">
          <div className="join">
            {Array.from({ length: Math.ceil(filteredProperties.length / itemsPerPage) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`join-item btn btn-sm font-normal ${
                    currentPage === index + 1 ? 'btn-active' : ''
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ),
            )}
          </div>
        </div>
      )}

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-normal mb-2">No properties found</h3>
          <p className="text-base-content/70">Try adjusting your filters</p>
        </div>
      )}
    </section>
  )
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <a href={`/properties/${property.slug}`} className="block">
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all font-satoshi">
        <figure className="relative aspect-[4/3]">
          <img
            src={
              typeof property.images[0]?.image == 'object'
                ? property.images[0]?.image?.url?.toString()
                : '/placeholder.jpg'
            }
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span
              className={`badge badge-lg px-6 py-3 font-normal ${
                property.type === 'sale' ? 'badge-success' : 'badge-info'
              }`}
            >
              {property.type === 'sale' ? 'Sale' : 'Rent'}
            </span>
          </div>
        </figure>

        <div className="card-body p-4">
          <div className="flex items-center gap-2 text-sm text-base-content/70 truncate font-normal">
            <MapPin className="w-4 h-4 shrink-0" />
            {property.address}
          </div>

          <h3 className="card-title text-lg line-clamp-1 font-normal">{property.title}</h3>

          <div className="flex items-center gap-4 text-sm text-base-content/70 my-2">
            <div className="flex items-center gap-1 font-normal">
              <Bed className="w-4 h-4 shrink-0" />
              {property.bedrooms} bed
            </div>
            <div className="flex items-center gap-1 font-normal">
              <Bath className="w-4 h-4 shrink-0" />
              {property.bathrooms} bath
            </div>
            <div className="flex items-center gap-1 font-normal">
              <Maximize className="w-4 h-4 shrink-0" />
              {property.area} sq.ft
            </div>
          </div>

          <div className="card-actions justify-end mt-2">
            <span className="text-lg font-normal">{formatPrice(property.price)}</span>
          </div>
        </div>
      </div>
    </a>
  )
}
