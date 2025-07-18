import {ILink} from '@/types/link.interface'
import {IMedia} from '@/types/media.interface'

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
  id: number
  title: string
  thumbnail: string
  price: number
}
export interface TourDetailPackage {
  price: number
  duration_number: number
  motorbike_package: MotorbikePackage
  car_package: MotorbikePackage
  pick_up_location: InPickUpLocation[]
  motorbike_rents: InMotorbikeRents[]
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

export type TourDetailApiResType = {
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
  package_tour: {
    price: string
    duration_number: string
    motorbike_package: {
      saving: {
        title: string
        price: string
        note: string
        images: IMedia
      }[]
      budget: {
        title: string
        price: string
        note: string
        image: IMedia
      }[]
      premium: {
        title: string
        price: string
        note: string
        image: IMedia
      }[]
    }
    car_package: {
      saving: {
        title: string
        price: string
        note: string
        images: IMedia
      }[]
      budget: {
        title: string
        price: string
        note: string
        image: IMedia
      }[]
      premium: {
        title: string
        price: string
        note: string
        image: IMedia
      }[]
    }
    pick_up_location: {
      location: string
      detail_location: string
    }[]
    main_car_pick_up_data: {
      id: number
      title: string
      fields: {
        price_car_pax: string
        max_number_pax: string
        start_time: string
        images_review_car: IMedia[]
      }
    }[]
    motorbike_rents: {
      id: number
      title: string
      thumbnail: string
      price: string
    }[]
    taxonomies: {
      duration: {
        id: number
        name: string
        slug: string
      }[]
      location: {
        id: number
        name: string
        slug: string
      }[]
    }
  }
}
