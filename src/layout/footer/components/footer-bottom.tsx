import {IFooter} from '@/types/footer.interface'
import FooterContact from './footer-contact'
import FooterAddress from './footer-address'
import FooterPayment from './footer-payment'
import ArrowUpRight from './arrow-up-right'

interface FooterBottomProps {
  data: IFooter
}

const FooterBottom = ({data}: FooterBottomProps) => {
  return (
    <div className='footer__bottom'>
      <div className='footer__bottom-left'>
        <FooterSvg className='absolute top-0 right-0 w-[1.40625rem] h-[1.40625rem] translate-x-[50%] translate-y-[-50%]' />
        <div className='footer__bottom-left--content'>
          <p>{data.footer_desc.footer_copyright}</p>
          <a href={data.footer_desc.design_copyright.url}>
            <p>{data.footer_desc.design_copyright.title}</p>
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className='footer__bottom-right'>
        <div className='footer__bottom-right--content'>
          <FooterContact data={data.footer_contact} />
          <FooterAddress data={data.address} />
          <FooterPayment data={data.ways_can_you_pay} />
        </div>
      </div>
    </div>
  )
}

export const FooterSvg = ({className}: {className?: string}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='23'
      height='23'
      viewBox='0 0 23 23'
      fill='none'
      className={className}
    >
      <path
        d='M11.7501 22.7891L13.0744 12.8636H10.4258L11.7501 22.7891Z'
        fill='#D9D9D9'
      />
      <path
        d='M11.7499 0.289062L10.4256 10.2145L13.0742 10.2145L11.7499 0.289062Z'
        fill='#D9D9D9'
      />
      <path
        d='M23 11.539L13.0746 10.2147L13.0746 12.8633L23 11.539Z'
        fill='#D9D9D9'
      />
      <path
        d='M0.5 11.5391L10.4254 12.8634L10.4254 10.2148L0.5 11.5391Z'
        fill='#D9D9D9'
      />
    </svg>
  )
}

export default FooterBottom
