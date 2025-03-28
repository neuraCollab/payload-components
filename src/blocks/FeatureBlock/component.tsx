'use client'
import React from 'react'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  icon: string
  title: string
  description: string
}

export type FeatureBlockType = {
  blockType: 'feature'
  label: string
  title: string
  features: Feature[]
}

const iconMap: Record<string, LucideIcon> = {
  'user-check': Icons.UserCheck,
  settings: Icons.Settings,
  'trending-up': Icons.TrendingUp,
  'refresh-cw': Icons.RefreshCw,
  users: Icons.Users,
  'shield-check': Icons.ShieldCheck,
  home: Icons.Home,
  key: Icons.Key,
  'map-pin': Icons.MapPin,
  phone: Icons.Phone,
  mail: Icons.Mail,
  calendar: Icons.Calendar,
  heart: Icons.Heart,
  star: Icons.Star,
  'check-circle': Icons.CheckCircle,
  award: Icons.Award,
}

export const FeatureBlock: React.FC<FeatureBlockType> = ({ label, title, features }) => {
  return (
    <section className="py-24 px-4 bg-base-100 text-base-content font-satoshi">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
            {label}
          </div>
          <h2 className="text-4xl font-normal max-w-3xl mx-auto">{title}</h2>
        </div>

        {/* Сетка преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Icons.Settings
            return (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-normal">{feature.title}</h3>
                <p className="text-base-content/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
