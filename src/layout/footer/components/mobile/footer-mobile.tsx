import {IFooter} from '@/types/footer.interface'
import '@/layout/footer/style/footer-mb.css'
import FooterMobileHeader from './footer-mobile-header'
import FooterMobileContact from './footer-mobile-contact'
import FooterMobileQuickAccess from './footer-mobile-quick-access'
import FooterMobilePayment from './footer-mobile-payment'
import FooterMobileCopyright from './footer-mobile-copyright'
import Image from 'next/image'

const FooterMobile = ({data}: {data: IFooter}) => {
  return (
    <footer
      id='footer__mb'
      className='relative'
    >
      <Image
        src='/footer/footer-bg-mb.svg'
        alt='footer-bg-mb'
        width={1000}
        height={647}
        className='footer__mb-bg absolute bottom-0 left-0'
      />
      <div className='footer__mb-container'>
        <FooterMobileHeader data={data} />
        <FooterMobileContact data={data} />
        <FooterMobileQuickAccess data={data} />
        <FooterMobilePayment data={data} />
        <FooterMobileCopyright data={data} />
      </div>
    </footer>
  )
}

export default FooterMobile
