'use client'

import React from 'react'

type Stat = {
  value: string
  label: string
}

export type VisionMissionBlockType = {
  blockType: 'vision-mission'
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  stats: Stat[]
}

export const VisionMissionBlock: React.FC<VisionMissionBlockType> = ({
  title,
  description,
  buttonText,
  buttonLink,
  stats,
}) => {
  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        {/* Верхняя часть - текст */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-4xl font-normal mb-6">{title}</h2>
          </div>
          <div>
            <p className="text-base-content/70 leading-relaxed">{description}</p>
            {buttonText && buttonLink && (
              <a href={buttonLink} className="btn btn-primary rounded-full mt-6">
                {buttonText}
              </a>
            )}
          </div>
        </div>

        {/* Нижняя часть - статистика */}
        <div className="bg-base-200/30 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center relative">
                {/* Разделительная точка */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-2 h-2 rounded-full bg-primary/20 translate-x-full" />
                )}
                <div className="text-4xl font-normal text-primary mb-2">{stat.value}</div>
                <div className="text-base-content/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
