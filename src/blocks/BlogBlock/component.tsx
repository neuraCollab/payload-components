'use client'

import React from 'react'
import { Post } from '@/payload-types'
import { formatDate } from '@/utilities/formatDate'

export type BlogBlockType = {
  blockType: 'blog'
  title: string
  subtitle?: string
  posts: Post[]
  showAllLink?: string
  itemsPerPage: number
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  console.log(post)

  return (
    <a href={`/posts/${post.slug}`} className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <img
          src={
            typeof post.image === 'object' && post.image?.url ? post.image.url : '/placeholder.jpg'
          }
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {post.categories?.[0] && (
          <div className="absolute top-4 left-4">
            <div className="badge badge-primary font-normal">
              {typeof post.categories[0] === 'object' ? post.categories[0].title : 'Resource'}
            </div>
          </div>
        )}
      </div>
      <h3 className="text-lg font-normal line-clamp-2 mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      {post.meta?.description && (
        <p className="text-base-content/70 line-clamp-2 text-sm">{post.meta.description}</p>
      )}
    </a>
  )
}

export const BlogBlock: React.FC<BlogBlockType> = ({
  title,
  subtitle,
  posts = [],
  showAllLink,
  itemsPerPage = 3,
}) => {
  const displayedPosts = posts.slice(0, itemsPerPage)

  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        {/* Заголовок */}
        <div className="mb-12">
          {subtitle && <div className="text-sm font-medium text-primary mb-2">{subtitle}</div>}
          <div className="flex items-center justify-between gap-8">
            <h2 className="text-4xl font-normal">{title}</h2>
            {showAllLink && (
              <a href={showAllLink} className="btn btn-ghost font-normal">
                View all posts
              </a>
            )}
          </div>
        </div>

        {/* Сетка постов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
