import {ILink} from './link.interface'

export interface IGuildNews {
  title: string
  thumbnail: string
  permalink: string
  date: string
  categories: {
    id: number
    name: string
    slug: string
  }[]
}

export interface IGuild {
  title: string
  sub_title: string
  desc: string
  button: ILink
}
