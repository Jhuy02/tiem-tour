export interface NewsCategory {
  id: number
  name: string
  slug: string
}

export interface NewsIdDetail {
  ID: number
  post_author: string
  post_date: string
  post_date_gmt: string
  post_content: string
  post_title: string
  post_excerpt: string
  post_status: string
  comment_status: string
  ping_status: string
  post_password: string
  post_name: string
  to_ping: string
  pinged: string
  post_modified: string
  post_modified_gmt: string
  post_content_filtered: string
  post_parent: number
  guid: string
  menu_order: number
  post_type: string
  post_mime_type: string
  comment_count: string
  filter: string
}

export interface News {
  id: NewsIdDetail
  title: string
  slug: string
  excerpt: string
  thumbnail: string
  permalink: string
  date: string
  summary: string
  categories: NewsCategory[]
}

export interface NewsList {
  link: string
  slug: string
  title: string
  date: string
  image: {
    url: string
    alt: string
  }
  category: string
}

export interface Categories {
  name: string
  slug: string
}
