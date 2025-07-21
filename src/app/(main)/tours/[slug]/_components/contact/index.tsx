import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {BookingFormValues} from '@/schemas/booking.schema'
import {useFormContext} from 'react-hook-form'

export default function ContactInformation() {
  const {control} = useFormContext<BookingFormValues>()
  return (
    <div className='xsm:p-[0rem_1rem_0rem_1rem] rounded-[1.5rem] bg-white p-[1.875rem_1.75rem] sm:border-[1px] sm:border-solid sm:border-[#EDEDED]'>
      <p className='xsm:mb-[0.5rem] mb-[1.5rem] pb-[1rem] text-[1.125rem] leading-[1.3] font-[900] tracking-[0.00281rem] text-[#303030] sm:border-b-[0.0625rem] sm:border-solid sm:border-b-[#EDEDED]'>
        Contact information
      </p>
      <div className='xsm:flex-col xsm:space-y-[0.75rem] flex w-full sm:space-x-[0.75rem]'>
        <FormField
          control={control}
          name='yourName'
          render={({field}) => (
            <FormItem className='flex w-full flex-col gap-0 space-y-[0.63rem]'>
              <FormLabel className='font-trip-sans gap-[0.25rem] text-[0.875rem] leading-[1.2] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
                Your name{' '}
                <span className='text-[1rem] tracking-[-0.03rem] text-[#EA3434]'>
                  *
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='Nguyen Van A'
                  className='font-trip-sans h-[3.0625rem] rounded-[0.75rem] border-[1px] border-solid border-[#EDEDED] bg-[#FFF] p-[1rem] text-[0.875rem] leading-[1.2] font-medium tracking-[0.00219rem] text-[#2E2E2E] transition-all duration-300 focus-visible:border-[#25ACAB] focus-visible:ring-0 lg:hover:border-[#25ACAB]'
                />
              </FormControl>
              <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='yourPhone'
          render={({field}) => (
            <FormItem className='flex w-full flex-col gap-0 space-y-[0.63rem]'>
              <FormLabel className='font-trip-sans gap-[0.25rem] text-[0.875rem] leading-[1.2] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
                Phone number{' '}
                <span className='text-[1rem] tracking-[-0.03rem] text-[#EA3434]'>
                  *
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='02445*********'
                  className='font-trip-sans h-[3.0625rem] rounded-[0.75rem] border-[1px] border-solid border-[#EDEDED] bg-[#FFF] p-[1rem] text-[0.875rem] leading-[1.2] font-medium tracking-[0.00219rem] text-[#2E2E2E] transition-all duration-300 focus-visible:border-[#25ACAB] focus-visible:ring-0 lg:hover:border-[#25ACAB]'
                />
              </FormControl>
              <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name='yourEmail'
        render={({field}) => (
          <FormItem className='mt-[0.75rem] flex w-full flex-col gap-0 space-y-[0.63rem]'>
            <FormLabel className='font-trip-sans gap-[0.25rem] text-[0.875rem] leading-[1.2] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
              Email address{' '}
              <span className='text-[1rem] tracking-[-0.03rem] text-[#EA3434]'>
                *
              </span>
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder='tiemtour@gmail.com'
                className='font-trip-sans h-[3.0625rem] rounded-[0.75rem] border-[1px] border-solid border-[#EDEDED] bg-[#FFF] p-[1rem] text-[0.875rem] leading-[1.2] font-medium tracking-[0.00219rem] text-[#2E2E2E] transition-all duration-300 focus-visible:border-[#25ACAB] focus-visible:ring-0 lg:hover:border-[#25ACAB]'
              />
            </FormControl>
            <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='yourMessage'
        render={({field}) => (
          <FormItem className='mt-[0.75rem] flex w-full flex-col gap-0 space-y-[0.63rem]'>
            <FormLabel className='font-trip-sans gap-0 text-[0.875rem] leading-[1.2] font-medium tracking-[0.00219rem] text-[#2E2E2E]'>
              Message
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder='Your message'
                className='xsm:h-[8.125rem] font-trip-sans h-[6.8125rem] resize-none rounded-[0.75rem] border-[1px] border-solid border-[#EDEDED] bg-[#FFF] p-[1rem] text-[0.875rem] leading-[1.2] font-medium tracking-[0.00219rem] text-[#2E2E2E] transition-all duration-300 focus-visible:border-[#25ACAB] focus-visible:ring-0 lg:hover:border-[#25ACAB]'
              />
            </FormControl>
            <FormMessage className='font-trip-sans pl-[0.125rem] text-[0.75rem] leading-[120%] font-bold tracking-[0.00188rem] text-[#EA3434]' />
          </FormItem>
        )}
      />
    </div>
  )
}
