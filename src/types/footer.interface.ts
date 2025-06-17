import {ILink} from './link.interface'
import {IMedia} from './media.interface'

export interface IFooter {
  footer_title: string
  footer_email: string
  footer_link: ILink
  footer_quick_access: {
    footer_page_link: ILink
  }[]
  footer_contact: {
    title: string
    hotline_1: string
    hotline_2: string
    social_links: {
      link: ILink
      icon: IMedia
    }[]
  }
  address: {
    title: string
    desc: string
  }
  ways_can_you_pay: {
    title: string
    payment_images: IMedia[]
  }
  footer_desc: {
    footer_copyright: string
    design_copyright: ILink
    footer_year: string
  }
}
