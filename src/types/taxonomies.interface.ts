export interface TermItem {
  id?: number
  name: string
  slug: string
  img_location?: string
  hot_location?: boolean
}

export interface TaxonomyResponse {
  [taxonomy: string]: TermItem[]
}
