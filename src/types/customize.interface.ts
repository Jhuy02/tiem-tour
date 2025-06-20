import {ILink} from './link.interface'
import {IMedia} from './media.interface'

export interface ICustomize {
  title: string
  background_pc: IMedia
  background_mb: IMedia
  image_decor_1: IMedia
  image_decor_2: IMedia
  marquee: string
  button: ILink
}
