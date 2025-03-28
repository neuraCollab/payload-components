'use client'

import React from 'react'
import { Agent } from '@/payload-types'
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export type AgentsBlockType = {
  blockType: 'agents'
  label: string
  title: string
  agents: Agent[]
}

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
}

export const AgentsBlock: React.FC<AgentsBlockType> = ({ label, title, agents }) => {
  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="text-sm text-primary mb-2">{label}</div>
          <h2 className="text-4xl font-normal">{title}</h2>
        </div>

        {/* Сетка агентов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-3xl mb-4">
                <img
                  src={typeof agent.image === 'object' ? agent.image.url : '/placeholder.jpg'}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-normal">{agent.name}</h3>
              <p className="text-base-content/70">{agent.position}</p>

              {agent.socialLinks && agent.socialLinks.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {agent.socialLinks.map((social, index) => {
                    const Icon = SOCIAL_ICONS[social.platform as keyof typeof SOCIAL_ICONS]
                    return Icon ? (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center text-base-content/70 hover:bg-primary hover:text-primary-content transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ) : null
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
