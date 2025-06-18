import Link from 'next/link'
import {Arrow} from '@/components/blue-button'
import {IFooter} from '@/types/footer.interface'

interface FooterTopProps {
  data: IFooter
}

const FooterTop = ({data}: FooterTopProps) => {
  return (
    <div className='footer__top'>
      <div className='footer__top-left'>
        <p>@{data.footer_desc.footer_year}</p>
      </div>
      <div className='footer__top-right'>
        <div className='footer__top-right--content'>
          <div>
            <h2 className='footer__top-right--content-title'>
              {data.footer_title}
            </h2>
            <Link
              href={`mailto:${data.footer_email}`}
              target='_blank'
              className='footer__top-right--content-link'
            >
              {data.footer_email}
            </Link>
            <Link
              href={`/contact`}
              target={data.footer_link.target}
              className='footer__top-right--content-button space-x-[0.625rem]'
            >
              <p>{data.footer_link.title}</p>
              <Arrow color='white' />
            </Link>
          </div>
          <div className='footer__top-right--content-quick-access'>
            <p>Quick Access</p>
            <nav>
              <ul>
                {data.footer_quick_access.map((item) => (
                  <li key={item.footer_page_link.url}>
                    <Link href={item.footer_page_link.url}>
                      {item.footer_page_link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
