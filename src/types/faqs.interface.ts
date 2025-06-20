import {IBannerV2} from '@/app/_components/banner-v2'
import {IMedia} from './media.interface'

export interface IFaqsContent {
  title: string
  desc: string
  image: IMedia
}

export interface IFaqs {
  compound_banner: IBannerV2['data']
  faq_content: {
    title: string
    desc: string
    image: IMedia
    list_content: IFaqsContent[]
  }
}
