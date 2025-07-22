import {IContactPageACF} from '@/app/(main)/contact/page'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import styles from './contact-info.module.css'
import IconArrowRightV1 from '@/components/icon/IconArrowRightV1'

export default function ContactInfo({data}: IContactPageACF) {
  return (
    <div className='w-[40.5625rem] shrink-0 max-sm:w-full max-sm:px-[1rem] max-sm:py-[2rem]'>
      <div className='mb-[2rem] flex max-sm:flex-wrap'>
        <div className='mr-[2rem] w-[14.5625rem] shrink-0 max-sm:mr-0 max-sm:mb-[1.5rem] max-sm:w-full'>
          <p className='mb-[0.5rem] flex items-start'>
            <Image
              alt=''
              width={20}
              height={20}
              src={data?.contact_social?.icon}
              className='h-auto w-[1.25rem] shrink-0'
            />
            <span className='font-dvn-luckiest-guy ml-[0.5rem] shrink-0 text-[1.25rem] leading-[150%] font-normal tracking-[0.00313rem] text-[#3B3943]'>
              {data?.contact_social?.title ?? ''}
            </span>
          </p>
          <Link
            target='_blank'
            href={data?.contact_social?.social_link?.url}
            className='mb-[0.5rem] inline-block text-[1rem] leading-[160%] font-normal tracking-[0.0025rem] text-[rgba(48,48,48,0.80)] underline'
          >
            {data?.contact_social?.social_link?.title}
          </Link>
          <div className='w-[14.5625rem] max-sm:w-full'>
            <Image
              alt=''
              width={233}
              height={287}
              src={data?.contact_social?.qr_image}
              className='h-auto w-full max-sm:h-[9.4375rem] max-sm:w-auto'
            />
          </div>
        </div>
        <div className='flex flex-1 flex-col max-sm:w-full'>
          <div className='self-stretch not-last:mb-[2rem] max-sm:pb-[0.625rem] max-sm:not-last:mb-[0.75rem]'>
            <p className='mb-[0.625rem] flex items-start'>
              <Image
                alt=''
                width={50}
                height={50}
                className='h-auto w-[1.25rem] shrink-0'
                src={data?.email?.icon}
              />
              <span className='font-dvn-luckiest-guy ml-[0.5rem] text-[1.25rem] leading-[150%] font-normal tracking-[0.00313rem] text-[#3B3943] max-sm:text-[1.125rem] max-sm:leading-[120%] max-sm:tracking-[0.0125rem]'>
                {data?.email?.label}
              </span>
            </p>
            <Link
              href={`mailto:${data?.email?.email}`}
              className='font-trip-sans inline-block text-[1rem] leading-[160%] font-normal tracking-[0.0025rem] text-[rgba(48,48,48,0.80)] max-sm:leading-[150%]'
            >
              {data?.email?.email}
            </Link>
          </div>
          <div className='self-stretch not-last:mb-[2rem] max-sm:not-last:mb-[0.75rem]'>
            <p className='mb-[0.625rem] flex items-start'>
              <Image
                alt=''
                width={50}
                height={50}
                className='h-auto w-[1.25rem] shrink-0'
                src={data?.address?.icon}
              />
              <span className='font-dvn-luckiest-guy ml-[0.5rem] text-[1.25rem] leading-[150%] font-normal tracking-[0.00313rem] text-[#3B3943]'>
                {data?.address?.label}
              </span>
            </p>
            <span className='font-trip-sans text-[1rem] leading-[160%] font-normal tracking-[0.0025rem] text-[rgba(48,48,48,0.80)]'>
              {data?.address?.address}
            </span>
          </div>
          <div className='self-stretch not-last:mb-[2rem] max-sm:pb-[0.75rem] max-sm:not-last:mb-[0.75rem]'>
            <p className='mb-[0.625rem] flex items-start'>
              <Image
                alt=''
                width={50}
                height={50}
                className='h-auto w-[1.25rem] shrink-0'
                src={data?.hotline?.icon}
              />
              <span className='font-dvn-luckiest-guy ml-[0.5rem] text-[1.25rem] leading-[150%] font-normal tracking-[0.00313rem] text-[#3B3943]'>
                {data?.hotline?.label}
              </span>
            </p>
            <div>
              {data?.hotline?.hotline_list?.map((item, index) => {
                return (
                  <p
                    key={index}
                    className='font-trip-sans text-[1rem] leading-[160%] font-normal tracking-[0.0025rem] text-[rgba(48,48,48,0.80)]'
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
      <div className='relative w-full'>
        <div className='relative flex h-auto w-full flex-col bg-[#25acab] shadow-[7px_10px_34.3px_0px_rgba(0,0,0,0.12)]'>
          <div
            className={clsx(styles.googleMap)}
            dangerouslySetInnerHTML={{__html: data?.map?.iframe ?? ''}}
          ></div>
          {data?.map?.link?.url && (
            <Link
              target='_blank'
              href={data?.map?.link.url}
              className='flex w-full items-center justify-between self-stretch px-[1.5rem] py-[1rem]'
            >
              <span className='font-dvn-luckiest-guy inline-block pt-[0.375rem] pr-[19.25rem] pl-[0.3125rem] text-[1.375rem] leading-[120%] font-normal tracking-[0.01563rem] text-[#fff] uppercase max-sm:pr-[3.0625rem] max-sm:pb-[0.1875rem] max-sm:text-[1.125rem] max-sm:tracking-[0.0125rem]'>
                Directions to the office
              </span>
              <IconArrowRightV1 className='w-[1.3125rem h-auto]' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
