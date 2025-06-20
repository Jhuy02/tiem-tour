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

export interface TypeOurTour {
  title: string
  discover_our_tours: {
    title: string
    link: {
      title: string
      url: string
      target: string
    }
  }
}
export interface TypeOurTourList {
  img_tour_1: {
    url: string
    alt: string
  }
  img_tour_2: {
    url: string
    alt: string
  }
  img_tour_3: {
    url: string
    alt: string
  }
  tour_1: {
    title: string
    price: string
    link: string
    duration: string[]
  }
  tour_2: {
    title: string
    price: string
    link: string
    duration: string[]
  }
  tour_3: {
    title: string
    price: string
    link: string
    duration: string[]
  }
  imgae_discover_our_tours: {
    url: string
    alt: string
  }
}
