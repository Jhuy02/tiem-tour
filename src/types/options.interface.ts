import {IMedia} from './media.interface'

export interface PageLink {
  id: number
  title: string
  url: string
  target?: string
}

export interface LetYourTrip {
  hotline_image: IMedia
  title: string
  hotline: string
}

export interface HeaderOption {
  logo: IMedia
  page_list: {page: PageLink}[]
  let_your_trip: LetYourTrip
}

export interface FooterLink {
  title: string
  url: string
  target: string
}

export interface FooterQuickAccess {
  footer_page_link: FooterLink
}

export interface SocialLink {
  icon: IMedia
  link: FooterLink
}

export interface FooterContact {
  title: string
  hotline_1: string
  hotline_2: string
  social_links: SocialLink[]
}

export interface Address {
  title: string
  desc: string
}

export interface WaysCanYouPay {
  title: string
  payment_images: IMedia[]
}

export interface DesignCopyright {
  title: string
  url: string
  target: string
}

export interface FooterDesc {
  footer_copyright: string
  design_copyright: DesignCopyright
  footer_year: string
}

export interface Footer {
  footer_title: string
  footer_email: string
  footer_link: FooterLink
  footer_quick_access: FooterQuickAccess[]
  footer_contact: FooterContact
  address: Address
  ways_can_you_pay: WaysCanYouPay
  footer_desc: FooterDesc
}

export interface CtaButtons {
  whatapps: string
  messenger: FooterLink
}

export interface DataLocation {
  ha_giang: {
    name: string
    img: IMedia
    slug: string
  }
  cao_bang: {
    name: string
    img: IMedia
    slug: string
  }
  bac_kan: {
    name: string
    img: IMedia
    slug: string
  }
}

export interface DataSearch {
  history: string
  hot_search: {
    title: string
    key: {
      key: string
    }[]
  }
  button: string
}

export interface HeaderMobile {
  logo: IMedia
  page_list: {page: PageLink}[]
  let_your_trip: LetYourTrip
  button_link: FooterLink
  hotline_1: string
  hotline_2: string
  social: SocialLink[]
  search: DataSearch
}

export interface DataOptions {
  header_option: HeaderOption
  header_mobile: HeaderMobile
  footer: Footer
  cta_buttons: CtaButtons
  location: DataLocation
}
