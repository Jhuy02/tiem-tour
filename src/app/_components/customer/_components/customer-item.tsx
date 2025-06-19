import Image from 'next/image'
import Link from 'next/link'
import {Rating} from './rate'
import {ICustomerSay} from '@/types/customer.interface'

interface CustomerItemProps {
  item: ICustomerSay
  isReverse?: boolean
}

export const CustomerItem = ({item, isReverse}: CustomerItemProps) => {
  return (
    <div
      className={`customer__item swiper-slide${
        isReverse ? ' flex-row-reverse' : ''
      }`}
    >
      <div className='customer__item-img'>
        <Image
          src={item.image.url}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          className='customer__item-img'
        />
      </div>
      <div className='customer__item-content'>
        <div className='customer__item-header'>
          <div className='customer__item-avatar'>
            <div>
              <Image
                src={item.avatar.url}
                alt={item.avatar.alt}
                width={item.avatar.width}
                height={item.avatar.height}
                className='customer__item-avatar'
              />
              <div className='customer__item-avatar-info'>
                <span className='customer__item-name'>{item.name}</span>
                <div className='customer__item-rating-mobile'>
                  {Array.from({length: 4}).map((_, i) => (
                    <Rating key={i} />
                  ))}
                </div>
              </div>
            </div>
            <Link
              href={item.link.url}
              target='_blank'
            >
              <Image
                src={'/home/customer/trip.svg'}
                alt='trip'
                width={24}
                height={24}
                className='customer__item-tripadvisor'
              />
            </Link>
          </div>
          <div className='customer__item-rating'>
            {Array.from({length: 4}).map((_, i) => (
              <Rating key={i} />
            ))}
          </div>
        </div>
        <div className='customer__item-text'>
          <p className='customer__item-text-title'>{item.rate}</p>
          <p className='customer__item-text-desc'>{item.desc}</p>
        </div>
      </div>
    </div>
  )
}
