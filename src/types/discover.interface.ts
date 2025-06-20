import {ILink} from './link.interface'

export interface IDiscover {
  title: string
  sub_title: string
  button: ILink
}

export interface IDiscoverTour {
  link: string
  slug: string
  title: string
  image: {
    url: string
    alt: string
  }
  price: string
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

export interface IDiscoverLocation {
  id: number
  name: string
  slug: string
  img_location: string
  hot_location: boolean
  map_location: string
}
