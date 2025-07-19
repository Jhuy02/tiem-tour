import {IMedia} from './media.interface'

export interface ILocations {
  id: number
  name: string
  slug: string
  hot: boolean
  children: ILocations[]
  tour: {
    id: number
    title: string
    slug: string
    thumbnail: string
  }
  img: IMedia
  count: number
}
