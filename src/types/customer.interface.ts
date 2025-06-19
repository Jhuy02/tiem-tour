import {ILink} from './link.interface'
import {IMedia} from './media.interface'

export interface ICustomerSay {
  image: IMedia
  avatar: IMedia
  name: string
  link: ILink
  rate: string
  desc: string
}

export interface ICustomer {
  title: string
  background: IMedia
  custom_say: ICustomerSay[]
  tripadventure: {
    icon: IMedia
    link: ILink
  }
  google: {
    icon: IMedia
    link: ILink
  }
}
