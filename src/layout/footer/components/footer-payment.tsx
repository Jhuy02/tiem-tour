import Image from 'next/image'
import {IFooter} from '@/types/footer.interface'

interface FooterPaymentProps {
  data: IFooter['ways_can_you_pay']
}

const FooterPayment = ({data}: FooterPaymentProps) => {
  return (
    <div className='footer__bottom-right--item'>
      <p className='footer__bottom-right--item-number'>03</p>
      <div className='footer__bottom-right--item-wrapper'>
        <p className='footer__bottom-right--item-title'>{data.title}</p>
        <div className='footer__bottom-right--item-payment'>
          {data.payment_images.map((item, index) => (
            <Image
              src={item.url}
              alt={item.alt}
              width={24}
              height={24}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FooterPayment
