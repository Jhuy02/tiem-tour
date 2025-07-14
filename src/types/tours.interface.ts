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
