import Link from 'next/link'
import Image from 'next/image'
import {IFooter} from '@/types/footer.interface'

interface FooterContactProps {
  data: IFooter['footer_contact']
}

const FooterContact = ({data}: FooterContactProps) => {
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
    <div className='footer__bottom-right--item'>
      <p className='footer__bottom-right--item-number'>01</p>
      <div className='footer__bottom-right--item-wrapper'>
        <div>
          <p className='footer__bottom-right--item-title'>{data.title}</p>
          <Link
            href={`tel:${data.hotline_1}`}
            className='footer__bottom-right--item-content'
            target='_blank'
          >
            Hotline: <span>{data.hotline_1}</span>
          </Link>
          <Link
            href={`tel:${data.hotline_2}`}
            className='footer__bottom-right--item-content block'
            target='_blank'
          >
            Hotline: <span>{data.hotline_2}</span>
          </Link>
        </div>
        <div className='footer__bottom-right--item-social'>
          {data.social_links.map((item, index) => (
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
    </div>
  )
}

export default FooterContact
