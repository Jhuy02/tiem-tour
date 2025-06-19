'use client'

import {ICustomer} from '@/types/customer.interface'
import './styles/styles.css'
import Image from 'next/image'
import useIsMobile from '@/hooks/useIsMobile'
import {CustomerSwiper} from './_components/customer-swiper'
import {CustomerList} from './_components/customer-list'
import {CustomerButtonGroup} from './_components/customer-button-group'

const Customer = ({data}: {data: ICustomer}) => {
  const isMobile = useIsMobile()

  return (
    <section id='customer'>
      <Image
        src={data.background.url}
        alt={data.background.alt}
        width={data.background.width}
        height={data.background.height}
        className='customer__bg'
      />
      <Image
        src={'/home/customer/top.webp'}
        alt='customer-top'
        width={1000}
        height={1000}
        className='customer__top'
      />

      <div className='customer__content'>
        <h2 className='customer__title xsm:mx-auto'>{data.title}</h2>
        {isMobile ? (
          <CustomerSwiper custom_say={data.custom_say} />
        ) : (
          <CustomerList custom_say={data.custom_say} />
        )}
        <div className='swiper-pagination'></div>
      </div>

      <CustomerButtonGroup
        tripadventure={data.tripadventure}
        google={data.google}
      />
    </section>
  )
}

export default Customer
