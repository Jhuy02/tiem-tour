import {convertRemToPx} from '@/lib/utils'
import {ICustomerSay} from '@/types/customer.interface'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {CustomerItem} from './customer-item'

export const CustomerSwiper = ({custom_say}: {custom_say: ICustomerSay[]}) => {
  return (
    <Swiper
      pagination={{el: '.swiper-pagination', clickable: true}}
      modules={[Pagination]}
      slidesPerView={1}
      className='h-[14.2375rem]! px-[0.75rem]!'
      spaceBetween={convertRemToPx(1)}
    >
      {Array.isArray(custom_say) &&
        custom_say?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='flex items-center justify-center h-[14.2375rem]! bg-[#F9F4EA] relative'>
              <CustomerItem item={item} />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
