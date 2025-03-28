'use client'
import React from 'react'
import { Search, Calendar, Handshake, Home, Key, Check, LucideIcon } from 'lucide-react'

type Step = {
  icon: string
  title: string
  description: string
}

export type HowItWorksBlockType = {
  blockType: 'how-it-works'
  label: string
  title: string
  steps: Step[]
}

// Захардкоженный список иконок
const ICONS = {
  '1': Search,
  '2': Calendar,
  '3': Handshake,
  '4': Home,
  '5': Key,
  '6': Check,
} as const

export const HowItWorksBlock: React.FC<HowItWorksBlockType> = ({ label, title, steps }) => {
  return (
    <section className="py-24 px-4 bg-base-100 text-base-content font-satoshi">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
            {label}
          </div>
          <h2 className="text-4xl font-normal max-w-3xl mx-auto">
            {title.split('advantages').map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">advantages</span>}
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Шаги */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS] || Search

            return (
              <div key={index} className="relative">
                {/* Линия соединения (только между элементами) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-base-300 -z-10" />
                )}

                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-normal">{step.title}</h3>
                  <p className="text-base-content/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
