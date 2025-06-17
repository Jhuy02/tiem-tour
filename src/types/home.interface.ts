export interface DataBanner {
  select: 'img' | 'video' | 'upload'
  img_pc: {
    url: string
    alt: string
  }
  img_mb: {
    url: string
    alt: string
  }
  link_video_youtube: string
  upload_video: {
    url: string
    alt: string
  }
}
