import ContactForm from '@/app/(main)/contact/contact-form'
import ContactInfo from '@/app/(main)/contact/contact-info'
import BannerV2 from '@/app/_components/banner-v2'
import fetchData from '@/fetches/fetchData'

interface ILink {
  title?: string
  url: string
  target?: string
}
interface IHotline {
  label?: string
  hotline?: string
}
export interface IContactPageACF {
  data: {
    contact_title: string
    contact_social: {
      icon: string
      title?: string
      social_link: ILink
      qr_image: string
    }
    email: {
      icon: string
      label?: string
      email?: string
    }
    address: {
      icon: string
      label?: string
      address?: string
    }
    hotline: {
      icon: string
      label?: string
      hotline_list: IHotline[]
    }
    map: {
      iframe: string
      link: ILink
    }
  }
}

export default async function ContactPage() {
  const {acf} = await fetchData({
    api: `wp/v2/pages/25?_fields=acf&acf_format=standard`,
  })
  return (
    <main className="relative bg-center bg-no-repeat bg-cover bg-[url('/images/background-page-mobile.webp')] sm:bg-[url('/images/background-page-pc.webp')] pb-[12rem] max-sm:pb-0">
      <BannerV2 data={acf.compound_banner} />
      <section className='relative my-[8.75rem] max-sm:my-0'>
        <div className='max-w-[79.75rem] mx-auto flex max-sm:flex-wrap'>
          <ContactForm data={acf.contact_content} />
          <ContactInfo data={acf.contact_content} />
        </div>
      </section>
    </main>
  )
}
