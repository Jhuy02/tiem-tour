import {IDiscoverTour} from '@/types/discover.interface'
import Link from 'next/link'
import ImageFallback from '@/components/image/ImageFallback'

interface TourCardProps {
  tour: IDiscoverTour
}

const TourCard = ({tour}: TourCardProps) => {
  return (
    <div className='h-[34.75rem]! p-[1.25rem]! xsm:w-[19.6275rem]! xsm:h-[30.3125rem]! overflow-hidden shrink-0 relative xsm:p-[1rem]!'>
      <Link
        href={`/tours/${tour.slug}`}
        className='group xsm:group-none'
      >
        <ImageFallback
          src={'/home/discover/bg-card.webp'}
          alt='bg-card'
          width={355}
          height={556}
          className='w-full h-full object-cover absolute inset-0 z-0 xsm:w-[19.6275rem] xsm:h-[30.3125rem]'
        />
        <div className='relative z-10'>
          <div className='w-[19.6875rem] h-[24.4375rem] rounded-[12.5rem] overflow-hidden mb-[1rem] xsm:w-[17.64275rem] xsm:h-[21.81463rem] xsm:mb-[1.75rem]'>
            <ImageFallback
              src={tour.image.url}
              alt={tour.title}
              width={315.284}
              height={391.034}
              className='w-[19.70525rem] h-[24.43963rem] object-cover group-hover:scale-110 transition-all duration-300 xsm:group-hover:scale-100'
            />
          </div>
          <article>
            <h4 className='text-[1.25rem] leading-[1.5rem] tracking-[0.01563rem] uppercase line-clamp-2 text-[#3B3943] font-dvn-luckiest-guy w-[19.6875rem] mb-[0.625rem] xsm:text-[1.125rem] xsm:leading-[1.35rem] xsm:tracking-[0.0125rem] xsm:w-[17.625rem]'>
              {tour.title}
            </h4>
            <div className='flex items-center'>
              <Dial
                props={{
                  className: 'size-[1.125rem] mr-[0.625rem] xsm:size-[1rem]',
                }}
              />
              <span className='text-[#C83E21] text-[1.625rem] leading-[1.95rem] tracking-[0.01563rem] uppercase font-dvn-luckiest-guy xsm:text-[1.125rem] xsm:leading-[1.35rem] xsm:tracking-[0.0125rem]'>
                {tour.price} USD
              </span>
              <span className='text-[#C83E21] mx-[0.5rem]'>•</span>
              <span className='text-[#3B3943] font-extrabold leading-[1.2rem] tracking-[0.0025rem] font-trip-sans xsm:text-[0.75rem] xsm:leading-[0.9rem] xsm:tracking-[0.00188rem]'>
                {tour.duration[0].name}
              </span>
            </div>
          </article>
        </div>
      </Link>
    </div>
  )
}

const Dial = ({props}: {props?: React.SVGProps<SVGSVGElement>}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='19'
      viewBox='0 0 18 19'
      fill='none'
      {...props}
    >
      <g clipPath='url(#clip0_2409_1573)'>
        <path
          d='M8.4375 1.13281H9.5625V3.38389H8.4375V1.13281ZM8.4375 15.7567H9.5625V18.0078H8.4375V15.7567ZM15.1864 9.00781H17.4375V10.1328H15.1864V9.00781ZM0.5625 9.00781H2.81358V10.1328H0.5625V9.00781Z'
          fill='#C83E21'
        />
        <path
          d='M9 18.5703C4.03749 18.5703 0 14.5328 0 9.57031C0 4.6078 4.03749 0.570312 9 0.570312C13.9625 0.570312 18 4.6078 18 9.57031C18 14.5328 13.9625 18.5703 9 18.5703ZM9 1.69531C4.65768 1.69531 1.125 5.22799 1.125 9.57031C1.125 13.9126 4.65768 17.4453 9 17.4453C13.3423 17.4453 16.875 13.9126 16.875 9.57031C16.875 5.22799 13.3423 1.69531 9 1.69531Z'
          fill='#C83E21'
        />
        <path
          d='M12.3796 6.18914C12.3167 6.12632 12.2359 6.08439 12.1483 6.06902C12.0607 6.05366 11.9705 6.06559 11.8899 6.10322L7.69732 8.06232C7.60515 8.10545 7.53107 8.1796 7.48803 8.2718L5.53279 12.4604C5.49523 12.541 5.48334 12.6312 5.49875 12.7188C5.51415 12.8064 5.5561 12.8872 5.61892 12.9501C5.70034 13.0314 5.81071 13.0771 5.92578 13.0771C5.98757 13.0771 6.04998 13.064 6.10844 13.0364L10.301 11.0854C10.3937 11.0425 10.468 10.9681 10.5109 10.8755L12.4662 6.67882C12.5038 6.59819 12.5156 6.50794 12.5001 6.42033C12.4847 6.33272 12.4426 6.252 12.3796 6.18914ZM8.0118 9.19903L9.37371 10.5611L6.8216 11.7486L8.0118 9.19903Z'
          fill='#C83E21'
        />
      </g>
      <defs>
        <clipPath id='clip0_2409_1573'>
          <rect
            width='18'
            height='18'
            fill='white'
            transform='translate(0 0.570312)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default TourCard
