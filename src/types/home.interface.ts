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
export interface TypeMysterious {
  title: string
  img_deco1: {
    url: string
    alt: string
  }
  img_deco2: {
    url: string
    alt: string
  }
  img_deco3: {
    url: string
    alt: string
  }
  more: {
    title: {
      url: string
      alt: string
    }
    desc: string
    link: {
      title: string
      url: string
      target: string
    }
  }
  checkin: TypeMysteriousItem
  transpot: TypeMysteriousItem
  food: TypeMysteriousItem
  homestay: TypeMysteriousItem
  desc: string
}
export interface TypeMysteriousItem {
  id_tiktok: string
  thumnail: {
    url: string
    alt: string
  }
  thumnail_mb: {
    url: string
    alt: string
  }
  title: string
}
