import { ILink } from '@/types/link.interface'
import { IMedia } from '@/types/media.interface'

export interface TourTaxonomy {
  id: number
  name: string
  slug: string
  hot?: null | boolean
}
export interface TourImage {
  url: string
  alt: string
}

export interface TourItemResponse {
  title: string
  link: string
  slug: string
  price: string
  image: TourImage
  duration: TourTaxonomy[]
  location: TourTaxonomy[]
}
export interface DiscoveryTourProps {
  initialQueryParams: string
  initialPage: number
  initialTotalPages: number
  initialTours: TourItemResponse[]
  tourLocationTax: TourTaxonomy[]
  tourDurationTax: TourTaxonomy[]
}

export interface FilterSelectOptionProps {
  icon: string
  label?: string
  keyParam: string
  select: 'single' | 'multiple'
  value?: TourTaxonomy[]
  options: TourTaxonomy[]
  className?: string
  onChange: (key: string, value: TourTaxonomy[]) => void
}

export interface TourFilterProps {
  tourDuration: TourTaxonomy[]
  tourLocation: TourTaxonomy[]
  tourBudget: TourTaxonomy[]
}
type TaxonomyItem = {
  id: number
  name: string
  slug: string
}
export interface TourItemDataResponse {
  image: IMedia
  duration: TaxonomyItem[]
  location: TaxonomyItem[]
  price: string
  slug: string
  link: string
  title: string
}
export interface TourListDataResponse {
  limit: number
  page: number
  total: number
  totalPages: number
  data: TourItemDataResponse[]
}

export interface TypePackage {
  title: string
  price: number
  note: string
  images: {
    alt: string
    url: string
  }[]
}

export interface MotorbikePackage {
  saving: TypePackage[]
  budget: TypePackage[]
  premium: TypePackage[]
}
export interface InPickUpLocation {
  location: string
  detail_location: string
}

export interface InMotorbikeRents {
  motorbike_rent_list: InMotorbikeRentsList[]
  rent_motorcycles_warning: string
}
export interface InMotorbikeRentsList {
  id: number
  title: string
  thumbnail: string
  price: number
  description: string
  images: {
    url: string
    alt: string
  }[]
  specifications: {
    name: string
    content: string
  }[]
  warning: string
}
export interface InGift {
  gift_tour_list: {
    name: string
    image: {
      url: string
      alt: string
    }
  }[]
  warning: string
}
export interface InPolicy {
  deposit_policy: {
    title: string
    content: string
  }
  no_refund_policy: {
    title: string
    content: string
  }
  policy_content: string
}
export interface TourDetailPackage {
  price: number
  duration_number: number
  motorbike_package: MotorbikePackage
  car_package: MotorbikePackage
  pick_up_location: InPickUpLocation[]
  motorbike_rents: InMotorbikeRents
  gift: InGift
  policy: InPolicy
}

export interface TourDetailContent {
  package_tour: TourDetailPackage
  title: string
  thumbnail: IMedia
  acf_fields: {
    price: string
    overview: Overview
    landscape: Landscape[]
    faq: FAQ[]
    tripadvisor: Tripadvisor
  }
  taxonomies: {
    duration: TourTaxonomy[]
    location: TourTaxonomy[]
  }
}

export interface Overview {
  desc: string
  editor: string
  glance: {
    depart_from: string
    itinerary: string
    time: string
  }
  different: {
    image: IMedia
    text: string
  }
  gallery: {
    image: IMedia
    text: string
    link: ILink
  }
}

export interface Landscape {
  title: string
  morning: string
  destination: string
  evening: string
}

export interface FAQ {
  title: string
  desc: string
}

export interface Tripadvisor {
  gallery: IMedia[]
  desc: string
  map: IMedia[]
  number_of_reviews: string
  title: string
}
