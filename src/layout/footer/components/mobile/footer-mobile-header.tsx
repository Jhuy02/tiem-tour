import {IFooter} from '@/types/footer.interface'
import {FooterSvg} from '../footer-bottom'
import Link from 'next/link'
import {Arrow} from '@/components/blue-button'

interface FooterMobileHeaderProps {
  data: IFooter
}

const FooterMobileHeader = ({data}: FooterMobileHeaderProps) => {
  return (
    <div className='footer__mb-one'>
      <FooterSvg className='w-[1.40625rem] h-[1.40625rem] absolute bottom-0 right-[1.5rem] translate-y-[50%]' />
      <h2 className='footer__mb-one-title'>{data.footer_title}</h2>
      <Link
        href={`mailto:${data.footer_email}`}
        className='footer__mb-one-email'
      >
        {data.footer_email}
      </Link>
      <Link
        href={data.footer_link.url as string}
        className='footer__mb-one-button'
      >
        <p className='mt-0!'>{data.footer_link.title}</p>
        <div className='w-[1.125rem] h-[1.125rem]'>
          <Arrow
            color='white'
            props={{
              width: '1.125rem',
              height: '1.125rem',
            }}
          />
        </div>
      </Link>
    </div>
  )
}

export default FooterMobileHeader
