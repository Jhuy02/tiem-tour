import { IFooter } from '@/types/footer.interface'
import Image from 'next/image'
import Link from 'next/link'

interface FooterMobileContactProps {
  data: IFooter
}

const FooterMobileContact = ({data}: FooterMobileContactProps) => {
  const isEmail = (url: string) => {
    return url.includes('@') && !url.startsWith('http')
  }

  const getHref = (url: string) => {
    if (isEmail(url)) {
      return `mailto:${url}`
    }
    return url
  }

  return (
    <div className='footer__mb-two'>
      <div className='footer__mb-two--item'>
        <p className='footer__mb-two--item-title'>
          {data.footer_contact.title}
        </p>
        <Link
          href={`tel:${data.footer_contact.hotline_1}`}
          className='footer__mb-two--item-content'
        >
          {data.footer_contact.hotline_1}
        </Link>
        <Link
          href={`tel:${data.footer_contact.hotline_2}`}
          className='footer__mb-two--item-content'
        >
          {data.footer_contact.hotline_2}
        </Link>
        <div className='footer__mb-two--item-social'>
          {data.footer_contact.social_links.map((item, index) => (
            <Link
              href={getHref(item.link.url)}
              key={index}
              target='_blank'
            >
              <Image
                src={item.icon.url}
                alt={item.icon.alt}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className='footer__mb-two--item'>
        <p className='footer__mb-two--item-title'>{data.address.title}</p>
        <p className='footer__mb-two--item-content'>{data.address.desc}</p>
      </div>
    </div>
  )
}

export default FooterMobileContact
