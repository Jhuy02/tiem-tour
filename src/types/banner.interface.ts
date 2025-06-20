import {IMedia} from '@/types/media.interface'

interface IBannerImage {
  image_pc: IMedia
  image_mobile: IMedia
}

export interface IBanner {
  title: string
  banner_image: IBannerImage[]
}
