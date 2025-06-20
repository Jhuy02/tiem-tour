import {IFooter} from '@/types/footer.interface'
import FooterTop from './components/footer-top'
import FooterBottom from './components/footer-bottom'
import './style/footer.css'
import Image from 'next/image'
import FooterMobile from './components/mobile/footer-mobile'
import ImageAnimationFooter from '@/components/image/ImageAnimationFooter'

const Footer = ({data}: {data: IFooter}) => {
  return (
    <>
      <footer
        id='footer'
        className='block relative xsm:h-auto! z-1'
      >
        <ImageAnimationFooter />
        <Image
          src={'/footer/footer-bg.svg'}
          width={1000}
          height={647}
          alt='footer-bg'
          className='footer__bg absolute top-0 left-0 w-full h-full xsm:hidden'
        />
        <div className='footer__container xsm:hidden!'>
          <FooterTop data={data} />
          <FooterBottom data={data} />
        </div>
        <div className='xsm:block hidden'>
          <FooterMobile data={data} />
        </div>
      </footer>
    </>
  )
}

export default Footer
