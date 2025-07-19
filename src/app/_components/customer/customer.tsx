'use client'

import useIsMobile from '@/hooks/useIsMobile'
import { ICustomer } from '@/types/customer.interface'
import Image from 'next/image'
import { CustomerButtonGroup } from './_components/customer-button-group'
import { CustomerList } from './_components/customer-list'
import { CustomerSwiper } from './_components/customer-swiper'
import './styles/styles.css'

const Customer = ({data}: {data: ICustomer}) => {
  const isMobile = useIsMobile()

  return (
    <section id='customer'>
      {isMobile ? (
        <Image
          src={data.background.mobile.url || ''}
          alt={data.background.mobile.alt}
          width={data.background.mobile.width}
          height={data.background.mobile.height}
          className='w-full h-full object-contain absolute bottom-[-4rem] left-0'
        />
      ) : (
        <Image
          src={data.background.desktop.url || ''}
          alt={data.background.desktop.alt}
          width={data.background.desktop.width}
          height={data.background.desktop.height}
          className='customer__bg xsm:hidden!'
        />
      )}
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
