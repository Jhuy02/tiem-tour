import BlogCard from '@/app/_components/news-card'
import RelatedBlogs from '@/app/_components/related-news'
import React from 'react'

export default function ContactPage() {
  return (
    <main className='relative'>
      <BlogCard
        className='w-[20.9375rem] shrink-0'
        title=''
        category=''
        thumbSrc=''
        date=''
      />
      <RelatedBlogs />
    </main>
  )
}
