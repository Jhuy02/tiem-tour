export interface TourTaxonomy {
  id: number
  name: string
  slug: string
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
  page?: number
  totalPages?: number
  initialTours?: TourItemResponse[]
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
