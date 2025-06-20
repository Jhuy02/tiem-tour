import {IContactPageACF} from '@/app/(main)/contact/page'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactInfo({data}: IContactPageACF) {
  return (
    <div className='w-[40.5625rem] shrink-0 max-sm:w-full max-sm:px-[1rem] max-sm:py-[2rem]'>
      <div className='flex mb-[2rem] max-sm:flex-wrap'>
        <div className='w-[14.5625rem] mr-[2rem] shrink-0 max-sm:w-full max-sm:mr-0 max-sm:mb-[1.5rem]'>
          <p className='flex items-start mb-[0.5rem]'>
            <Image
              alt=''
              width={50}
              height={50}
              src={data?.contact_social?.icon}
              className='w-[1.25rem] h-auto shrink-0'
            />
            <span className='shrink-0 ml-[0.5rem] text-[#3B3943] font-dvn-luckiest-guy text-[1.25rem] font-normal leading-[150%] tracking-[0.00313rem]'>
              {data?.contact_social?.title ?? ''}
            </span>
          </p>
          <Link
            target='_blank'
            href={data?.contact_social?.social_link?.url}
            className='inline-block text-[rgba(48,48,48,0.80)] text-[1rem] font-normal leading-[160%] tracking-[0.0025rem] underline mb-[0.5rem]'
          >
            {data?.contact_social?.social_link?.title}
          </Link>
          <div className='w-[14.5625rem] max-sm:w-full'>
            <Image
              alt=''
              width={200}
              height={300}
              src={data?.contact_social?.qr_image}
              className='w-full h-auto max-sm:w-auto max-sm:h-[9.4375rem]'
            />
          </div>
        </div>
        <div className='flex-1 flex flex-col max-sm:w-full'>
          <div className='not-last:mb-[2rem] max-sm:not-last:mb-[0.75rem] self-stretch max-sm:pb-[0.625rem]'>
            <p className='flex items-start mb-[0.625rem]'>
              <Image
                alt=''
                width={50}
                height={50}
                className='w-[1.25rem] h-auto shrink-0'
                src={data?.email?.icon}
              />
              <span className='ml-[0.5rem] text-[#3B3943] font-dvn-luckiest-guy text-[1.25rem] font-normal leading-[150%] tracking-[0.00313rem] max-sm:text-[1.125rem] max-sm:leading-[120%] max-sm:tracking-[0.0125rem]'>
                {data?.email?.label}
              </span>
            </p>
            <Link
              href={`mailto:${data?.email?.email}`}
              className='text-[rgba(48,48,48,0.80)] font-trip-sans text-[1rem] font-normal leading-[160%] tracking-[0.0025rem] max-sm:leading-[150%] inline-block'
            >
              {data?.email?.email}
            </Link>
          </div>
          <div className='not-last:mb-[2rem] max-sm:not-last:mb-[0.75rem] self-stretch'>
            <p className='flex items-start mb-[0.625rem]'>
              <Image
                alt=''
                width={50}
                height={50}
                className='w-[1.25rem] h-auto shrink-0'
                src={data?.address?.icon}
              />
              <span className='ml-[0.5rem] text-[#3B3943] font-dvn-luckiest-guy text-[1.25rem] font-normal leading-[150%] tracking-[0.00313rem]'>
                {data?.address?.label}
              </span>
            </p>
            <span className='text-[rgba(48,48,48,0.80)] font-trip-sans text-[1rem] font-normal leading-[160%] tracking-[0.0025rem]'>
              {data?.address?.address}
            </span>
          </div>
          <div className='not-last:mb-[2rem] max-sm:not-last:mb-[0.75rem] self-stretch max-sm:pb-[0.75rem]'>
            <p className='flex items-start mb-[0.625rem]'>
              <Image
                alt=''
                width={50}
                height={50}
                className='w-[1.25rem] h-auto shrink-0'
                src={data?.hotline?.icon}
              />
              <span className='ml-[0.5rem] text-[#3B3943] font-dvn-luckiest-guy text-[1.25rem] font-normal leading-[150%] tracking-[0.00313rem]'>
                {data?.hotline?.label}
              </span>
            </p>
            <div>
              {data?.hotline?.hotline_list?.map((item, index) => {
                return (
                  <p
                    key={index}
                    className='text-[rgba(48,48,48,0.80)] font-trip-sans text-[1rem] font-normal leading-[160%] tracking-[0.0025rem]'
                  >
                    <span>{item.label} </span>
                    <Link
                      href={`tel:${item.hotline}`}
                      className='inline-block'
                    >
                      {item.hotline}
                    </Link>
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='w-full relative'>
        <div className='flex flex-col relative w-full h-auto bg-[#25acab] shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)]'>
          <div
            className={clsx(styles.googleMap)}
            dangerouslySetInnerHTML={{__html: data.map.iframe ?? ''}}
          ></div>
          {data?.map?.link?.url && (
            <Link
              target='_blank'
              href={data.map.link.url}
              className='flex self-stretch w-full items-center justify-between px-[1.5rem] py-[1rem]'
            >
              <span className='text-[#fff] text-[1.375rem] font-normal leading-[120%] tracking-[0.01563rem] uppercase inline-block pl-[0.3125rem] pt-[0.375rem] pr-[19.25rem] font-dvn-luckiest-guy max-sm:text-[1.125rem] max-sm:tracking-[0.0125rem] max-sm:pr-[3.0625rem] max-sm:pb-[0.1875rem]'>
                Directions to the office
              </span>
              <IconArrowRightV1 className='w-[1.3125rem h-auto]' />
            </Link>
          )}
        </div>
      </div> */}
    </div>
  )
}
