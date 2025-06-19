import {IMedia} from './media.interface'

export interface IExplore {
  desc: string
  hint: {
    icon: IMedia
    text: string
  }[]
}
