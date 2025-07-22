import {ILink} from '@/types/link.interface'
import {IMedia} from '@/types/media.interface'

export interface TourTaxonomy {
  id: number
  name: string
  slug: string
  hot?: null | boolean
}

export interface TourItemResponse {
  title: string
  slug: string
  price: string
  image: IMedia
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

export interface ArrivalUseBus {
  arrival_city: string
  arrival_address_: string
  arrival_time: string
}
export interface ArrivalPrivate {
  arrival_city: string
  arrival_address_: string
  arrival_time: string
}

export interface PrivateTransport {
  id: number
  name: string
  maximum_person: string
  pick_up_location: {
    id: number
    title: string
    price: string
  }[]
}
export interface MainCarPickup {
  id: number
  title: string
  fields: {
    price_car_pax: string
    max_number_pax: string
    start_time: string
    images_review_car: IMedia[]
  }
}
export interface ScheduleBus {
  name: string
  pickuplocation: string
  dropofflocation: string
  data: {
    route: string
    rows: {
      pickuptime: string
      departuretime: string
      arrivaltime: string
      vehicle_type: string
      pickuppoint: string
      dropoffpoint: string
      price: string
      recommend: boolean
    }[]
  }[]
}

export interface SchedulePrivateHanoiHagiang {
  route_name: string
  note: string
  contact: ILink
  items: {
    vehicle_type: string
    depart_time: string
    arrival_time: string
    price_noi_bai_airport_: string
    hanoi_price: string
  }[]
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
  private_transport: PrivateTransport[]
  main_car_pick_up_data: MainCarPickup[]
  arrival_use_bus: ArrivalUseBus[]
  arrival_private: ArrivalPrivate[]
  pick_up_and_drop_off_bus_service: {
    note: string
    schedule_bus: ScheduleBus[]
  }
  schedule_private_hanoi_hagiang: SchedulePrivateHanoiHagiang
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
    images: IMedia
    text: string
  }
  gallery: {
    images: IMedia
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
  id: number
  title: string
  thumbnail: IMedia
  acf_fields: {
    price: string
    overview: Overview
    landscape: Landscape[]
    faq: FAQ[]
    tripadvisor: Tripadvisor
    note_tour: {
      tour_included: string
      tour_excludes: string
    }
    transport_service: {
      outbound_trip: {
        use_our_bus_service: {
          title: string
          arrival_location: string
          arrival_time: string
          arrival_address: string
        }
        private_transport: {
          title: string
          arrival_location: string
          arrival_time: string
        }
      }
      return_trip: {
        use_our_bus_service: {
          title: string
          pickup_location: string
          pickup_address: string
          arrival_time: string
        }
        private_transport: {
          title: string
          arrival_location: string
          arrival_time: string
        }
      }
    }
    tour_sale_percent: number | string
  }
  taxonomies: {
    duration: TourTaxonomy[]
    location: TourTaxonomy[]
  }
  package_tour: TourDetailPackage
}
