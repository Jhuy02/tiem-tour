import {IFooter} from '@/types/footer.interface'
import Image from 'next/image'

interface FooterMobilePaymentProps {
  data: IFooter
}

const FooterMobilePayment = ({data}: FooterMobilePaymentProps) => {
  return (
    <div className='footer__mb-four'>
      <p className='footer__mb-four-title'>{data.ways_can_you_pay.title}</p>
      <div className='flex flex-wrap gap-[0.875rem] w-[80%]'>
        {data.ways_can_you_pay.payment_images.map((item, index) => (
          <Image
            src={item.url}
            alt={item.alt}
            key={index}
            className='w-[3.0625rem] h-[1.9375rem] object-cover'
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  )
}

export default FooterMobilePayment
