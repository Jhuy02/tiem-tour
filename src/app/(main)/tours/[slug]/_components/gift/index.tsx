'use client'
import Caution from '@/app/(main)/tours/[slug]/_components/common/Caution'
import ImageFallback from '@/components/image/ImageFallback'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import useIsMobile from '@/hooks/useIsMobile'
import { BookingFormValues } from '@/schemas/booking.schema'
import { InterGift } from '@/types/tours.interface'
import { useFormContext } from 'react-hook-form'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

interface GiftProps {
  gifts: InterGift[]
}

export default function Gift({ gifts }: GiftProps) {
  const isMobile = useIsMobile();
  const {control} = useFormContext<BookingFormValues>()
  return (
    <div className='xsm:mx-[1rem] p-[1.875rem_1.75rem] xsm:w-full xsm:p-[1rem_0.75rem] sm:rounded-[1.5rem] xsm:rounded-[1rem] border-[1px] border-solid border-[#EDEDED] bg-white'>
      <p className='mb-[1.5rem] border-b-[0.0625rem] border-solid border-b-[#EDEDED] pb-[1rem] text-[1.125rem] leading-[1.3] font-black tracking-[0.00281rem] text-[#303030]'>
        Gift for you
      </p>
      <FormField
        control={control}
        name="gifts"
        render={({ field }) => (
          <FormItem className="space-y-0 w-full flex">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex w-full"
              >
                {!isMobile ? (
                  <Swiper
                    className='w-full flex xsm:[]:grid xsm:grid-cols-1 xsm:gap-[0.75rem]'
                    slidesPerView={2}
                    spaceBetween={12}
                    grabCursor={true}
                  >
                    {Array.isArray(gifts) && gifts?.length > 0 && gifts.map((gift, index) => (
                      <SwiperSlide key={index}>
                        <FormItem className="flex items-center space-x-[0.5rem] cursor-pointer">
                          <FormControl>
                            <RadioGroupItem className='aria-[checked=true]:border-[#25ACAB] cursor-pointer aria-checked size-[1.25rem] rounded-[100%] border-[0.125rem] border-solid border-[#ADADAD] [&_svg]:size-[0.625rem] [&_svg_circle]:stroke-[#25ACAB] [&_svg_circle]:fill-[#25ACAB]' value={gift?.name} />
                          </FormControl>
                          <ImageFallback className='size-[5.75rem] rounded-[1rem]' src={'/images/gift.png'} alt={''} width={92} height={92} />
                          <FormLabel className="pl-[0.75rem] text-[#303030] font-trip-sans text-[0.875rem] font-extrabold tracking-[0.01563rem] leading-[1.2] cursor-pointer">
                            {gift?.name}
                          </FormLabel>
                        </FormItem>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : 
                  Array.isArray(gifts) && gifts?.length > 0 && gifts.map((gift, index) => (
                    <FormItem className="flex items-center space-x-[0.5rem] cursor-pointer">
                      <FormControl>
                        <RadioGroupItem className='aria-[checked=true]:border-[#25ACAB] cursor-pointer aria-checked size-[1.25rem] rounded-[100%] border-[0.125rem] border-solid border-[#ADADAD] [&_svg]:size-[0.625rem] [&_svg_circle]:stroke-[#25ACAB] [&_svg_circle]:fill-[#25ACAB]' value={gift?.name} />
                      </FormControl>
                      <ImageFallback className='size-[5.75rem] rounded-[1rem]' src={'/images/gift.png'} alt={''} width={92} height={92} />
                      <FormLabel className="pl-[0.75rem] text-[#303030] font-trip-sans text-[0.875rem] font-extrabold tracking-[0.01563rem] leading-[1.2] cursor-pointer">
                        {gift?.name}
                      </FormLabel>
                    </FormItem>
                  ))
                }
              </RadioGroup>
            </FormControl>
            <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
          </FormItem>
        )}
      />
      <Caution className="mt-[1.5rem]" content="Discounted car rental prices only apply to customers booking Tiemtour" />
    </div>
  )
}
