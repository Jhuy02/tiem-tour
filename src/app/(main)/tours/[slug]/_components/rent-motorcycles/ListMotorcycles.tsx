'use client'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import SvgClose from '@/app/(main)/tours/[slug]/_components/common/SvgClose'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/(main)/tours/[slug]/_components/rent-motorcycles/DialogCustom'
import ImageFallback from '@/components/image/ImageFallback'
import useIsMobile from '@/hooks/useIsMobile'
import {InMotorbikeRents} from '@/types/tours.interface'
import {Fragment} from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'

interface ListMotorcyclesProps {
  motorcycles: InMotorbikeRents
}

export default function ListMotorcycles({motorcycles}: ListMotorcyclesProps) {
  const isMobile = useIsMobile()
  return (
    <div className='xsm:p-[0.75rem] xsm:bg-[linear-gradient(180deg,#FFF_0%,#F0EBE5_72.66%)] space-y-[0.75rem] rounded-[1.5rem] bg-[linear-gradient(180deg,#FFF_0%,#F0EBE5_72.66%)] p-[1rem]'>
      <div className='xsm:grid-cols-1 grid grid-cols-2 gap-[0.75rem]'>
        {Array.isArray(motorcycles?.motorbike_rent_list) &&
          motorcycles?.motorbike_rent_list?.length > 0 &&
          motorcycles?.motorbike_rent_list?.map((motor, index) => (
            <Fragment key={index}>
              <Dialog>
                <DialogTrigger>
                  <div className='flex cursor-pointer items-center space-x-[1rem]'>
                    <ImageFallback
                      className='size-[4rem] rounded-[0.69563rem] bg-[linear-gradient(0deg,rgba(230,230,230,0.05)_0%,rgba(230,230,230,0.05)_100%)] object-cover'
                      src={motor?.thumbnail || ''}
                      alt={motor?.title || ''}
                      width={64}
                      height={64}
                    />
                    <div className='flex flex-col items-start justify-center'>
                      <p
                        className='font-trip-sans xsm:text-start text-[1rem] leading-[1.2] font-medium tracking-[0.0025rem] text-[#303030]'
                        dangerouslySetInnerHTML={{__html: motor?.title || ''}}
                      ></p>
                      <p className='font-trip-sans text-[0.875rem] leading-[1.2] font-bold tracking-[0.01563rem] text-[#C83E21] uppercase'>
                        {motor?.price?.toLocaleString('en-US')}usd/Day
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className='xsm:w-full xsm:rounded-b-none xsm:z-[999] w-[33rem] gap-[0] rounded-[1.5rem] border-none bg-white p-0'>
                  <DialogHeader className='p-[1.5rem_1.5rem_0rem_1.5rem]'>
                    <div className='flex items-center justify-between'>
                      <DialogTitle className=''>
                        <p
                          className='font-trip-sans text-[1.125rem] leading-[1.3] font-[900] tracking-[0.00281rem] text-[#303030]'
                          dangerouslySetInnerHTML={{__html: motor?.title || ''}}
                        ></p>
                      </DialogTitle>
                      <DialogClose className='cursor-pointer'>
                        <SvgClose className='size-[1.25rem]' />
                      </DialogClose>
                    </div>
                    <p className='xsm:text-start font-trip-sans text-[0.875rem] leading-[1.2] font-bold tracking-[0.01563rem] text-[#C83E21] uppercase'>
                      {motor?.price?.toLocaleString('en-US')}usd/Day
                    </p>
                  </DialogHeader>
                  <div className='mx-[1rem] mt-[0.75rem] h-[0.0625rem] bg-[#EDEDED]'></div>
                  <div className='hidden_scroll h-[31.125rem] w-full overflow-hidden overflow-y-auto rounded-[0_0_1.5rem_1.5rem] bg-[#FAFAFA] py-[1.5rem] pt-[0.75rem]'>
                    <p
                      className='font-trip-sans mb-[0.75rem] px-[1.5rem] text-[0.875rem] leading-[1.2] font-bold tracking-[0.01563rem] text-[#303030] uppercase'
                      dangerouslySetInnerHTML={{__html: motor?.description}}
                    ></p>
                    {isMobile ? (
                      <div className='hidden_scroll flex space-x-[0.75rem] overflow-hidden overflow-x-auto pr-[1.5rem] pl-[1.5rem]'>
                        {Array.isArray(motor?.images) &&
                          motor?.images?.length > 0 &&
                          motor?.images?.map((image, index) => (
                            <div
                              key={index}
                              className='!w-[12.8125rem] shrink-0'
                            >
                              <ImageFallback
                                className='size-[12.8125rem] rounded-[0.69563rem]'
                                src={image?.url || ''}
                                alt={image?.alt || motor?.title || ''}
                                width={205}
                                height={205}
                              />
                            </div>
                          ))}
                      </div>
                    ) : (
                      <Swiper
                        className='motorSwiper w-full !pr-[1.5rem] !pl-[1.5rem]'
                        spaceBetween={12}
                        slidesPerView={'auto'}
                        grabCursor={true}
                      >
                        {Array.isArray(motor?.images) &&
                          motor?.images?.length > 0 &&
                          motor?.images?.map((image, index) => (
                            <SwiperSlide
                              key={index}
                              className='!w-[12.8125rem]'
                            >
                              <ImageFallback
                                className='size-[12.8125rem] rounded-[0.69563rem]'
                                src={image?.url || ''}
                                alt={image?.alt || motor?.title || ''}
                                width={205}
                                height={205}
                              />
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    )}
                    {Array.isArray(motor?.specifications) &&
                      motor?.specifications?.length > 0 &&
                      motor?.specifications?.map((item, index) => (
                        <div
                          key={index}
                          className='mt-[0.75rem] px-[1.5rem]'
                        >
                          <p className='font-trip-sans mb-[0.75rem] text-[1rem] leading-[1.3] font-bold tracking-[0.0025rem] text-[#303030]'>
                            {item?.name}
                          </p>
                          <div
                            className='[&_li]:font-trip-sans [&_p]:font-trip-sans [&_li]:text-[0.875rem] [&_li]:tracking-[0.00219rem] [&_li]:text-[#303030] [&_p]:text-[0.875rem] [&_p]:tracking-[0.00219rem] [&_p]:text-[#303030] [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-[1.5rem]'
                            dangerouslySetInnerHTML={{
                              __html: item?.content || '',
                            }}
                          ></div>
                        </div>
                      ))}
                    <Caution
                      className='mx-[1rem] mt-[0.75rem]'
                      content={motor?.warning}
                    />
                  </div>
                  <div className='absolute right-0 bottom-0 left-0 h-[4.125rem] w-full rounded-[0_0_1.5rem_1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]'></div>
                </DialogContent>
              </Dialog>
            </Fragment>
          ))}
      </div>
      {motorcycles?.rent_motorcycles_warning && (
        <Caution
          className='mt-[0.75rem] bg-[#FFF]'
          content={motorcycles?.rent_motorcycles_warning}
        />
      )}
    </div>
  )
}
